import { redirect } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';
import mysql from 'mysql2'; 
import dotenv from 'dotenv'; 
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
        // console.log(user)

        if (user[0].length === 0) {
            // console.log("User not found")
            return fail(400, { message: "Invalid Username or Password"})
        }

        else {
            const sessionToken = Math.random().toString(36).substring(2)

            const query = `INSERT INTO user_session (session_id, user_id, session_start, session_end)
                           VALUES (?, ?, ?, ?)`

            const session_start = new Date().toISOString().slice(0, 19).replace('T', ' ');
            const session_expire = new Date(new Date().getTime() + 60 * 60000).toISOString().slice(0, 19).replace('T', ' ');

            await pool.query(query, [sessionToken, user[0][0].user_id, session_start, session_expire])

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

        console.log(data)

        let username = data.get("username")
        let email = data.get("email")

        

        return {
            status: 200,
            body: {
                message: "Hello from server"
            }
        }
    }
}