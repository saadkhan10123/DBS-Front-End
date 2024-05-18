/** @type {import('./$types').PageServerLoad} */
import user from '$lib/User/user.js';
import { fail } from '@sveltejs/kit';
import { useQuery } from '$lib/sql.js'

export async function load({ cookies }) {
    const userInfo = await user.getUser(cookies.get('session_id'));
    return {
        // userInfo
    };
};

export const actions = {
    changePassword: async ({ request, cookies }) => {
        let data = await request.formData()

        let oldPassword = data.get("oldPassword")
        let newPassword = data.get("newPassword")
        let confirmPassword = data.get("confirmPassword")

        if (newPassword !== confirmPassword) {
            return fail(400, { message: "Passwords do not match"})
        }

        const userInfo = await useQuery('SELECT * FROM user NATURAL JOIN user_session WHERE session_id = ?', [cookies.get('session_id')]);

        if (userInfo[0].password !== oldPassword) {
            return fail(400, { message: "Incorrect Password"})
        }

        await useQuery("UPDATE user SET password = ? WHERE user_id = ?", [newPassword, userInfo[0].user_id])

        return {
            status: 200,
            type: 'success',
        }
    }
}