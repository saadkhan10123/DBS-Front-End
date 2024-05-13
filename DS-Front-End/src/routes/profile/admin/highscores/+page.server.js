import { useQuery } from '$lib/sql.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const highscores = await useQuery('SELECT * FROM scoreboard NATURAL JOIN user NATURAL JOIN game');
    return {highscores};
};