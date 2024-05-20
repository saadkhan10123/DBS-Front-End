import { useQuery } from '$lib/sql.js';
import { rankUsers } from '$lib/sql.js'

export async function DELETE(request) {
    const url = new URL(request.url);
    const scoreId = url.searchParams.get("scoreId");

    try {
        const game_id = await useQuery('SELECT game_id FROM scoreboard WHERE score_id = ?', [scoreId]);
        useQuery('DELETE FROM scoreboard WHERE score_id = ?', [scoreId])
        rankUsers(game_id[0].game_id);
    } catch (e) {
        console.log(e)
    }
    
    let res = new Response(null, {
        status: 200
    });
    return res
}