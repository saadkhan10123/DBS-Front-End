import { useQuery } from '$lib/sql.js';
import user from '$lib/User/user.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({cookies}) {
    let query = `SELECT game_id, title FROM game`
    let games;
    // Fetching all game names and ids from database
    try {
        games = await useQuery(query);
    } catch (error) {
        console.log(error)
    }

    // Fetching the session_id from the cookies
    const session_id = cookies.get('session_id');

    // Fetching the user_id from the session_id
    const user_id = await user.getUserID(session_id);

    // Fetching data from the MySQL database
    query = `SELECT * FROM highscores WHERE user_id = ?`

    try {
        const result = await useQuery(query, [user_id]);
        console.log(result)
        return {
            result,
            games
        }
    } catch (error) {
        console.log(error)
    }
    return {
        games
    }
};

/** @type {import('./$types').Actions} */
export const actions = {
    addHighscore: async (request, cookies) => {
        let data = await request.formData()

        const session_id = cookies.get('session_id');
        const user_id = await user.getUserID(session_id);

        const game_id = data.get("game_id")
        const score = data.get("score")
        const submissionDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
        let proofImage = data.get("proofImage")

        // Convert the proof image to a BLOB
        proofImage = Buffer.from(proofImage, 'base64');

        console.log(game_id, score, submissionDate)

        const query = `INSERT INTO highscores (user_id, score, submission_date, proof_image) VALUES (?, ?, ?, ?)`

        // try {
        //     await useQuery(query, [user_id, score, submissionDate, proofImage]);
        //     return {
        //         status: 200,
        //         type: 'success',
        //     }
        // } catch (error) {
        //     // console.log(error)
        // }
    },
}