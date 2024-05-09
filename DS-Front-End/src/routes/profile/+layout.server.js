/** @type {import('./$types').LayoutServerLoad} */
import user from '$lib/User/user.js';


export async function load({ cookies }) {
    const userInfo = await user.getUser(cookies.get('session_id'));
    const isAdmin = await user.isAdmin(userInfo.user_id);
    return {
        userInfo,
        isAdmin
    };
}