import { useQuery } from '$lib/sql.js'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const games = await useQuery('SELECT game_id, title, year(release_year) as rel_year FROM game');
    console.log(games);
    return {games};
};