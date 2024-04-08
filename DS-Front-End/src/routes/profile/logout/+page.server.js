/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    cookies.delete('session_id', { path: '/' });
    return {};
};