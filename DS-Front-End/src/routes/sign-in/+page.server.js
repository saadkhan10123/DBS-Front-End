import { redirect } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';

let users = [
    {
        name: "John Doe",
        email: "jdoe@gmail.com",
        password: "password",
        country: "US",
        admin: true
    },
    {
        name: "Jane Doe",
        email: "jadoe@gmail.com",
        password: "password",
        country: "US",
        admin: false
    },
    {
        name: "John Smith",
        email: "jsmith@gmai.com",
        password: "password",
        country: "UK",
        admin: false
    },
]

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    throw new redirect("/sign-in/login")
    return {};
};

/** @type {import('./$types').Actions} */
export const actions = {
    login: async ({ request, cookies }) => {
        console.log("Hello server!")
        let data = await request.formData()

        let email = data.get("email")
        let password = data.get("password")

        let user = users.find(u => u.email === email && u.password === password)
        console.log(email, password)

        if (!user) {
            console.log("User not found")
            return fail(400, { message: "Invalid Username or Password"})
        }

        else {
            console.log("User found")

            const sessionToken = Math.random().toString(36).substring(2)
            cookies.set('session_id', sessionToken, {
                path: '/',
                httpOnly: true,
                sameSite: 'lax',
                secure: !process.env.NODE_ENV === 'development',
              });

            return {
                status: 200,
                type: 'success',
                sessionToken,
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