import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load() {
    console.log("logout?")
    throw new redirect(302, '/sign-in/login');
};