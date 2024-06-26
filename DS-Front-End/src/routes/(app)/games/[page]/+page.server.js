import { useQuery } from '$lib/sql.js'
import { goto } from '$app/navigation';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const game_id = params.page;

    let gameInfo;
    let scores;

    try {    
        gameInfo = await useQuery('SELECT *, year(release_year) rel_year FROM game WHERE game_id = ?', [game_id]);

        gameInfo = gameInfo[0]
        
        const base64Image = gameInfo.game_image.toString('base64');
        gameInfo.game_image = base64Image;
        scores = await useQuery('SELECT * FROM scoreboard NATURAL JOIN user WHERE game_id = ? ORDER BY highscore DESC', [game_id]);
    } catch (error) {
        console.error(error);
        return {
            status: 500,
            error: 'Failed to fetch game data'
        };
    }

    return {
        status: 200,
        gameInfo,
        scores
    };
};