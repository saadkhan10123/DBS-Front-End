import { redirect } from "@sveltejs/kit"

/** @type {import('./$types').PageLoad} */
export async function load( {fetch, params} ) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.page}`);
    const post = await res.json();

    if (res.ok) {
        return {
            post
        }
    }
    throw redirect(302, '/games')
}