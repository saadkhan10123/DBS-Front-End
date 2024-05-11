/** @type {import('./$types').PageServerLoad} */
import { useQuery } from '$lib/sql.js'

export async function load() {
    const popularGames = await useQuery('SELECT * FROM topGames');
    return {popularGames};
};