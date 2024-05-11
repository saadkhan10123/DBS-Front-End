import { useQuery } from '$lib/sql.js'

export async function load() {
    let latestScore = await useQuery('SELECT game_id, user_rank, username, highscore, nationality FROM scoreboard NATURAL JOIN user ORDER BY score_id DESC LIMIT 10');

    // Returning an object with HTTP status code 200 and fetched data
    return {
        status: 200,
        latestScore
    };
}
