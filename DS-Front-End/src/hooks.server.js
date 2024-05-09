// This hook will run authentication on user
import { handle, redirect } from "@sveltejs/kit"
import user from "$lib/User/user"

export async function handle ({ event, resolve }) {

    let response = await resolve(event)

    if (event.url.pathname.startsWith("/profile")) {
        const cookies = await event.cookies.get("session_id")
        const userInfo = await user.getUser(cookies)
        try {
            if (!userInfo.username) {
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