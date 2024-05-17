import { useQuery } from '$lib/sql.js'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const pendingScores = await useQuery('SELECT username, proof_image, total_score, submission_date, score_id FROM pending_scores NATURAL JOIN user');


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

