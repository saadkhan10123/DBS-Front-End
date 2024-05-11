/** @type {import('./$types').LayoutServerLoad} */
import user from '$lib/User/user.js';
import { useQuery } from '$lib/sql.js'

export async function load({ cookies }) {
    const userInfo = await user.getUser(cookies.get('session_id'));
    let latestGames = await useQuery('SELECT game_id, title FROM game');
    
    // Select last 8 games and flip the order so that the latest games are first
    latestGames = latestGames.slice(-8).reverse();

    return {
        userInfo,
        latestGames
    };
}