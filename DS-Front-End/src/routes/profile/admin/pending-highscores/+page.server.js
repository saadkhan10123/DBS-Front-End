import { useQuery } from '$lib/sql.js'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const pendingScores = await useQuery('SELECT * FROM pending_scores');

    if (pendingScores.length === 0) {
        return null;
    }
    return {pendingScores};
};