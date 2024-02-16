/** @type {import('./$types').PageLoad} */
export async function load( { fetch } ) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const games = await res.json();
    if (res.ok) {
        return {
            status: 200,
            games
        };
    }
    throw new Error('Failed to fetch games');
};