import { goto } from '$app/navigation';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    cookies.delete('session_id', { path: '/' });
    goto('/sign-in/login');
    return {};
};