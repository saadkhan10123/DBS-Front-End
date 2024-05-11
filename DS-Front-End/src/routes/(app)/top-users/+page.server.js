import { useQuery } from '$lib/sql.js'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const topUsers = await useQuery('SELECT * FROM topPlayers');
    if (topUsers.length === 0) {
        return {topUsers: null};
    }

    return {topUsers};
};