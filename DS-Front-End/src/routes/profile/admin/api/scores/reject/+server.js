import { useQuery } from '$lib/sql.js';

export async function POST(request) {
    const url = new URL(request.url);
    const scoreId = url.searchParams.get("scoreId");

    try {
        useQuery('DELETE FROM pending_scores WHERE score_id = ?', [scoreId])
    } catch (e) {
        console.log(e)
    }
    
    let res = new Response(null, {
        status: 200
    });
    return res
}