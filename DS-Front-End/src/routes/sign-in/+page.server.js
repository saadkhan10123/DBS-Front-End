import { redirect } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';
import mysql from 'mysql2'; 
import dotenv from 'dotenv'; 
import { makeSession } from '$lib/User/makeSession';
dotenv.config(); 

// Creating a connection pool to the MySQL database using environment variables
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_NAME,
}).promise(); 


/** @type {import('./$types').PageServerLoad} */
export async function load() {
    redirect(302, "/sign-in/login")
    return {};
};

/** @type {import('./$types').Actions} */
export const actions = {
    login: async ({ request, cookies }) => {
        let data = await request.formData()

        let email = data.get("email")
        let password = data.get("password")

        let user = await pool.query("SELECT * FROM user WHERE email = ? AND password = ?", [email, password])

        if (user[0].length === 0) {
            // console.log("User not found")
            return fail(400, { message: "Invalid Username or Password"})
        }

        else {
            const sessionToken = await makeSession(user[0][0].user_id)

            cookies.set('session_id', sessionToken, {
                path: '/',
                httpOnly: true,
                sameSite: 'lax',
                secure: !process.env.NODE_ENV === 'development',
            });
            return {
                status: 200,
                type: 'success',
            }
        }
        
    },
    signup: async ({ request, cookies }) => {
        let data = await request.formData()

        const username = data.get("username")
        const email = data.get("email")
        const password = data.get("password")
        const nationality = data.get("nationality")

        try {
            const user = await pool.query("INSERT INTO user (username, email, password, nationality) VALUES (?, ?, ?, ?)", [username, email, password, nationality])
 
            const sessionToken = await makeSession(user[0].insertId)

            cookies.set('session_id', sessionToken, {
                path: '/',
                httpOnly: true,
                sameSite: 'lax',
                secure: !process.env.NODE_ENV === 'development',
            });
        return {
            status: 200,
            type: 'success',
            body: {
                message: "Hello from server"
            }
        }
        } catch(e) {
            console.log(e)
            switch (e.code) {
                case "ER_DUP_ENTRY":
                    return fail(400, { message: "Username or Email already taken", error: ""})
                default:
                    return fail(500, { message: "Internal Server Error"})
            }
        }
        

    }
}