import { useQuery } from '$lib/sql.js'

export async function load() {
    let latestScore = await useQuery('SELECT game_image, game_id, user_rank, username, highscore, nationality FROM scoreboard NATURAL JOIN user NATURAL JOIN game ORDER BY score_id DESC LIMIT 10');

    latestScore.forEach(score => {
        const base64Image = score.game_image.toString('base64');
        score.game_image = base64Image;
    });

    // Returning an object with HTTP status code 200 and fetched data
    return {
        status: 200,
        latestScore
    };
}
