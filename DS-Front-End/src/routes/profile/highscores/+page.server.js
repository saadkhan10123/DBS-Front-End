import { useQuery } from '$lib/sql.js';
import user from '$lib/User/user.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({cookies}) {
    // Fetching the session_id from the cookies
    const session_id = cookies.get('session_id');

    // Fetching the user_id from the session_id
    const user_id = await user.getUserID(session_id);

    // Fetching data from the MySQL database
    const query = `SELECT * FROM highscores WHERE user_id = ?`


    try {
        const result = await useQuery(query, [user_id]);
        console.log(result)
        return {
            result
        }
    } catch (error) {
        // console.log(error)
    }
    return null;
};