/** @type {import('./$types').PageServerLoad} */
import { useQuery } from '$lib/sql.js'

export async function load() {
    let popularGames;
    try {
        popularGames = await useQuery('SELECT * FROM topGames NATURAL JOIN game');

        popularGames.forEach(game => {
            const base64Image = game.game_image.toString('base64');
            game.game_image = base64Image;
        });

    } catch (e) {
        console.log(e)
    }
    return {popularGames};
};