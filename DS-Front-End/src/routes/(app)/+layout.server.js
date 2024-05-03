/** @type {import('./$types').LayoutServerLoad} */
import { getUser } from '$lib/User/getUser.js';

export async function load({ cookies }) {
    const session = await console.log(cookies.get('session_id'));
    console.log(session);
    const user = await getUser(cookies.get('session_id'));
    return {
        user
    };
}