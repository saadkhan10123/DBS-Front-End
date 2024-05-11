import { goto } from '$app/navigation';
import { useQuery } from '$lib/sql.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    await useQuery('DELETE FROM user_session WHERE session_id = ?', [cookies.get('session_id')]);
    cookies.delete('session_id', { path: '/' });

    console.log('User logged out');

    goto('/sign-in/login');
    return {};
};