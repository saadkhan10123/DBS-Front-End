import { fail } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {};
};

/** @type {import('./$types').Actions} */
export const actions = {
    login: async ({ request }) => {
        console.log("Hello server!")
        let data = await request.formData()

        console.log(data)

        let email = data.get("email")

        if (email !== "lol@gmail.com") {
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