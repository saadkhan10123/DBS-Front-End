import { useQuery } from '$lib/sql.js'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const games = await useQuery('SELECT game_image, game_id, title, year(release_year) as rel_year FROM game');

    games.forEach(game => {
        const base64Image = game.game_image.toString('base64');
        game.game_image = base64Image;
    });
    
    return {games};
};