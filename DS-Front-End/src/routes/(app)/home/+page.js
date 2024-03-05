/** @type {import('./$types').PageLoad} */

export async function load({ fetch, data }) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    if (res.ok) {
        return {
            status: 200,
            posts,
            actor: data.actor
        };
    }
    return {
        status: 500,
        error: new Error('Failed to fetch posts')
    };
};