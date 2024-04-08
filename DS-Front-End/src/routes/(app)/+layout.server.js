/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
    let user = await cookies.get('session_id');
    return {
        user
    };
}