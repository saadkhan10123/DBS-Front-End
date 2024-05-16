import { useQuery } from '$lib/sql.js';
import user from '$lib/User/user.js';


export const actions = {
    addGame: async ({ request, cookies }) => {
        const data = await request.formData();
        console.log("Hello!")
        
        let title = data.get('title');
        let description = data.get('description');
        let image = data.get('image');
        let releaseDate = data.get('release-date');
        releaseDate = releaseDate.split(' ')[0]

        console.log(title, description, releaseDate)

        const mod_id = await user.getUserID(cookies.get('session_id'));

        // convert image to blob
        image = Buffer.from(image, 'base64');

        const query = 'INSERT INTO game (mod_id, title, description, game_image, release_year) VALUES (?, ?, ?, ?, ?)';

        try {
            await useQuery(query, [mod_id, title, description, image, releaseDate]);
            return {
                status: 200,
                type: 'success'
            };
        } catch (error) {
            console.log(error);
        }
    }
}
