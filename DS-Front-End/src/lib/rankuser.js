import { useQuery } from '$lib/sql.js';

export async function rankUsers(game_id) {
    let scores = await useQuery('SELECT * FROM scoreboard where game_id = ? ORDER BY highscore DESC', [game_id]);

    if (scores.length === 0) {
        return;
    } else if (scores.length === 1) {
        await useQuery('UPDATE scoreboard SET user_rank = 1 WHERE game_id = ? && highscore = ?', [game_id, scores[0].highscore]);
        return;
    }

    // Search for any ranking anomalies and fix them accordningly
    for (let i = 0; i < scores.length - 1; i++) {
        if (scores[i + 1].highscore > scores[i].highscore && scores[i + 1].user_rank <= scores[i].user_rank) {
            increaseRanking(scores[i + 1].user_rank, scores[i + 1].highscore);
        } else if(scores[i].user_rank - scores[i + 1].user_rank > 1) {
            decreaseRanking(scores[i].user_rank);
        }
    }
}

async function increaseRanking(rank, score) {
    await useQuery('UPDATE scoreboard SET user_rank = user_rank + 1 WHERE user_rank >= ? && highscore != ?', [rank, score]);
}

async function decreaseRanking(rank) {
    await useQuery('UPDATE scoreboard SET user_rank = user_rank - 1 WHERE user_rank >= ?', [rank]);
}