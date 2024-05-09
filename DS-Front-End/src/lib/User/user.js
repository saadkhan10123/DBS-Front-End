import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

export default {
    getUser: async function (session_id) {
        try {
            // Get user based on session_id
            const connection = mysql.createConnection({
                host: process.env.DB_HOST,
                user: process.env.DB_USER, 
                password: process.env.DB_PASSWORD, 
                database: process.env.DB_NAME
            }).promise();

            let user_id = await connection.query("SELECT user_id FROM user_session WHERE session_id = ?", [session_id])
            user_id = user_id[0][0].user_id

            let user = await connection.query("SELECT * FROM user WHERE user_id = ?", [user_id])
            user = user[0][0]

            return user;
        } catch (error) {
            // console.log(error)
        }

        return null;
    },
    getUserID: async function (session_id) {
        try {
            // Get user based on session_id
            const connection = mysql.createConnection({
                host: process.env.DB_HOST,
                user: process.env.DB_USER, 
                password: process.env.DB_PASSWORD, 
                database: process.env.DB_NAME
            }).promise();

            let user_id = await connection.query("SELECT user_id FROM user_session WHERE session_id = ?", [session_id])
            user_id = user_id[0][0].user_id

            return user_id;
        } catch (error) {
            // console.log(error)
        }

        return null;
    }
}