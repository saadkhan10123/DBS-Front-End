import { useQuery } from '$lib/sql.js';
import { rankUsers } from '$lib/rankuser.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
    const searchParam = new URLSearchParams(url.searchParams)
    const searchHighscore = searchParam.get('param1')

    await rankUsers(3);


    if(searchHighscore) {
        const highscores = await useQuery('SELECT * FROM scoreboard NATURAL JOIN user NATURAL JOIN game WHERE username = ?', [searchHighscore]);

        if (highscores.length === 0) {
            return null;
        }

        highscores.forEach((score) => {
            if (score.game_image) {
                const base64Image = score.game_image.toString('base64');
                score.game_image = base64Image;
            }
        });

        return {highscores};
    }

    const highscores = await useQuery('SELECT * FROM scoreboard NATURAL JOIN user NATURAL JOIN game');

    highscores.forEach((score) => {
        if (score.game_image) {
            const base64Image = score.game_image.toString('base64');
            score.game_image = base64Image;
        }
    });
    
    return {highscores};
};
