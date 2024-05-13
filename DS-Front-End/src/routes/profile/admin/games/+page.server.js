import { useQuery } from '$lib/sql.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const games = await useQuery('SELECT * FROM game');
    return {games};
};