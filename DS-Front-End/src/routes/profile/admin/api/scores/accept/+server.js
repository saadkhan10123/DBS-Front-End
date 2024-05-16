import { useQuery } from '$lib/sql.js';

export async function POST(request) {
    const url = new URL(request.url);
    const scoreId = url.searchParams.get("scoreId");

    const score = await useQuery('SELECT game_id, user_id, total_score, submission_date FROM pending_scores WHERE score_id = ?', [scoreId]);
    const userScore = {
        game_id: score[0].game_id,
        user_id: score[0].user_id,
        total_score: score[0].total_score,
        submission_date: score[0].submission_date
    }

    try {
        await insertScore(userScore.game_id, userScore);
        await useQuery('DELETE FROM pending_scores WHERE score_id = ?', [scoreId]);

        let res = new Response(null, {
            status: 200
        });

        return res
    } catch (e) {
        console.error(e);
    }
    
    let res = new Response(null, {
        status: 500
    });
    return res
}

async function insertScore(game_id, score) {
    const sameRank = await useQuery('SELECT user_rank FROM scoreboard WHERE highscore = ?', [score.total_score]);
    if (sameRank.length > 0) {
        await useQuery('INSERT INTO scoreboard (game_id, user_id, highscore, submission_date, user_rank) VALUES (?, ?, ?, ?, ?)', [game_id, score.user_id, score.total_score, score.submission_date, sameRank[0].rank]);
    } else {
        const prevRank = await useQuery('SELECT user_rank FROM scoreboard WHERE highscore > ? ORDER BY highscore DESC LIMIT 1', [score.total_score]);
        let newRank
        if (prevRank.length === 0) {
            newRank = 1;
        } else {
            newRank = prevRank[0].user_rank + 1;
        }
        await useQuery('UPDATE scoreboard SET user_rank = user_rank + 1 WHERE user_rank >= ?', [newRank]);
        await useQuery('INSERT INTO scoreboard (game_id, user_id, highscore, submission_date, user_rank) VALUES (?, ?, ?, ?, ?)', [game_id, score.user_id, score.total_score, score.submission_date, newRank]);
    }
}