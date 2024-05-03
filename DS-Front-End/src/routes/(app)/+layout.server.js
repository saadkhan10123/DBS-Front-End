/** @type {import('./$types').LayoutServerLoad} */
import { getUser } from '$lib/User/getUser.js';

export async function load({ cookies }) {
    const user = await getUser(cookies.get('session_id'));
    return {
        user
    };
}