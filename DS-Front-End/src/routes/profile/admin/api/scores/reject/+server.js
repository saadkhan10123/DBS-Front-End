import { useQuery } from '$lib/sql.js';

export async function DELETE(request) {
    const url = new URL(request.url);
    const userId = url.searchParams.get("userId");

    try {
        await useQuery('DELETE FROM user WHERE user_id = ?', [userId]);
    } catch (e) {
        console.error(e);
    }
    
    let res = new Response(null, {
        status: 200
    });
    return res
}