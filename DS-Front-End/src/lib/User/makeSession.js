import mysql from "mysql2"
import dotenv from "dotenv"
dotenv.config()

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}).promise()

export async function makeSession(user_id) {
    // console.log(cookies)
    try {
        const sessionToken = Math.random().toString(36).substring(2)
        const session_start = new Date().toISOString().slice(0, 19).replace('T', ' ')
        const session_expire = new Date(new Date().getTime() + 60 * 60000).toISOString().slice(0, 19).replace('T', ' ')

        const query = `INSERT INTO user_session (session_id, user_id, session_start, session_end)
                       VALUES (?, ?, ?, ?)`

        await connection.query(query, [sessionToken, user_id, session_start, session_expire])

        return sessionToken
    } catch (error) {
        // console.log(error)
    }

    return null;
}
