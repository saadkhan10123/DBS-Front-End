// This hook will run authentication on user

import { handle, redirect } from "@sveltejs/kit"
import { cookies } from "@sveltejs/kit"

export async function handle ({ event , resolve }) {

    // console.log(event.url.pathname)
    let response = await resolve(event)

    if (event.url.pathname.startsWith("/profile")) {
        console.log("Profile page")
        try {
            let user = await cookies.get('session_id', event)
            if (!user) {
                return redirect(302, "/sign-in/login")
            }
        } catch (error) {
            redirect(302, "/sign-in/login")
        }
    }
    
        // console.log(response)
    return response
}