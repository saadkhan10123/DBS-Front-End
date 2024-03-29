import { redirect } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    throw new redirect("/sign-in/login")
    return {};
};

/** @type {import('./$types').Actions} */
export const actions = {
    login: async ({ request }) => {
        console.log("Hello server!")
        let data = await request.formData()

        try {
            let email = data.get("email")
            console.log(email)
        }
        catch (e) {
            console.log(e)
            throw new redirect("/sign-in/login")
        }
        

        return {
            status: 200,
            body: {
                message: "Hello from server"
            }
        }
    },
    signup: async ({ request }) => {
        console.log("Hello server!")
        let data = await request.formData()

        console.log(data)

        let email = data.get("email")

        if (email !== "lmao@gmail.com") {
            console.log("Email not found")
            return fail(400, {email, message: "Email not found"})
        }

        return {
            status: 200,
            body: {
                message: "Hello from server"
            }
        }
    }
}