/** 
 * Function to load posts from an external API.
 * @param {Object} options 
 * @param {Function} options.fetch 
 * @param {Object} options.data
 * @returns {Promise<{status: number, posts?: any[], actor?: any, error?: Error}>} 
 * 
 */

export async function load({ fetch, data }) {
    // Fetching posts from an external API
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    // Parsing the response as JSON
    const posts = await res.json();

    // Checking if the response is successful
    if (res.ok) {
        // If successful, return data with HTTP status code 200
        return {
            status: 200,
            posts,
            actor: data.actor 
        };
    }

    // Otherwise, return HTTP status code 500 along with an error message
    return {
        status: 500,
        error: new Error('Failed to fetch posts') 
    };
};