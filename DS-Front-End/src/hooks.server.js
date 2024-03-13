// This hook will run authentication on user

import { handle } from "@sveltejs/kit"

export async function handle ({ event , resolve }) {

    console.log(event.url.pathname)
    let response = await resolve(event)

    return response
}