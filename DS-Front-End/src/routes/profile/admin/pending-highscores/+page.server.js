import { useQuery } from '$lib/sql.js'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const pendingScores = await useQuery('SELECT * FROM pending_scores');


    if (pendingScores.length === 0) {
        return {pendingScores: null};
    }

    pendingScores.forEach((score) => {
        if (score.proof_image) {
            const base64Image = score.proof_image.toString('base64');
            score.proof_image = base64Image;
        }
    });

    return {pendingScores};
};

