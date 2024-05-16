import { useQuery } from '$lib/sql.js';
import { rankUsers } from '$lib/rankuser.js';

export async function DELETE(request) {
    const url = new URL(request.url);
    const userId = url.searchParams.get("userId");


    try {
        const game_ids = await useQuery('SELECT game_id FROM scoreboard WHERE user_id = ? GROUP BY game_id', [userId]);

        try {
            await useQuery('DELETE FROM user WHERE user_id = ?', [userId]);
            game_ids.forEach(async (game_id) => {
                await rankUsers(game_id.game_id);
            });
        } catch (e) {
            console.error(e);
        }
        
    } catch (e) {
        console.error(e);
    }

    let res = new Response(null, {
        status: 200
    });
    return res
}