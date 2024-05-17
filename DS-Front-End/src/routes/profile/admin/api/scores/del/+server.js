import { useQuery } from '$lib/sql.js';
import { rankUsers } from '$lib/sql.js'

export async function DELETE(request) {
    const url = new URL(request.url);
    const scoreId = url.searchParams.get("scoreId");

    try {
        useQuery('DELETE FROM scoreboard WHERE score_id = ?', [scoreId])
        rankUsers();
    } catch (e) {
        console.log(e)
    }
    
    let res = new Response(null, {
        status: 200
    });
    return res
}