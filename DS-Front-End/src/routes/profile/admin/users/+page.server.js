import { useQuery } from '$lib/sql.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
    const searchParam = new URLSearchParams(url.searchParams)
    const searchUser = searchParam.get('param1')

    if(searchUser) {
        const users = await useQuery('SELECT user_id, email, username, nationality FROM user WHERE username = ?', [searchUser]);

        if (users.length === 0) {
            return null;
        }

        return {users};
    }

    const users = await useQuery('SELECT user_id, email, username, nationality FROM user LIMIT 10');

    return {users};
};