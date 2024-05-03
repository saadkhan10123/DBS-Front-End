// This hook will run authentication on user
import { handle, redirect } from "@sveltejs/kit"
import { getUser } from "$lib/User/getUser"

export async function handle ({ event, resolve }) {

    let response = await resolve(event)

    if (event.url.pathname.startsWith("/profile")) {
        const cookies = await event.cookies.get("session_id")
        const user = getUser(cookies)
        try {
            if (!user.username) {
                console.log("No user")
                return redirect(302, "/sign-in/login")
            }
        } catch (error) {
            console.log(error)
            redirect(302, "/sign-in/login")
        }
    }
    return response
}