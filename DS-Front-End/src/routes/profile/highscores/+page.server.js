import { useQuery } from '$lib/sql.js';
import user from '$lib/User/user.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({cookies}) {
    const games = await useQuery('SELECT game_id, title FROM game');

    const session_id = cookies.get('session_id');

    const query = 'SELECT username, highscore, title FROM scoreboard NATURAL JOIN user NATURAL JOIN game NATURAL JOIN user_session WHERE session_id = ?'

    const highscores = await useQuery(query, [session_id]);

    if (highscores.length === 0) {
        return {
            highscores: null,
            games
        };
    }

    return {
        highscores,
        games
    };
};

/** @type {import('./$types').Actions} */
export const actions = {
    addHighScore: async ({ request, cookies }) => {
        let data = await request.formData()

        const session_id = cookies.get('session_id');
        const user_id = await user.getUserID(session_id);

        const game_id = data.get("game_id")
        const score = data.get("score")
        const submissionDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
        let proofImage = data.get("proofImage")

        // Convert the proof image to a BLOB
        proofImage = Buffer.from(proofImage, 'base64');

        // console.log(game_id, score, submissionDate)

        const query = `INSERT INTO pending_scores (user_id, game_id, total_score, submission_date, proof_image) VALUES (?, ?, ?, ?, ?)`

        try {
            await useQuery(query, [user_id, game_id, score, submissionDate, proofImage]);
            return {
                status: 200,
                type: 'success',
            }
        } catch (error) {
            console.log(error)
        }
    },
}