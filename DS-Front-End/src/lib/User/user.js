import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();
import { useQuery } from '../sql';

export default {
    getUser: async function (session_id) {
        try {
            let query = `SELECT user_id,username, email, nationality FROM user_session NATURAL JOIN user WHERE session_id = ?`
            const user = await useQuery(query, [session_id]);

            if (user.length > 0) {
                return user[0];
            }

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

            connection.end()
            return user_id;
        } catch (error) {
            // console.log(error)
        }

        return null;
    },
    isAdmin: async function (user_id) {
        try {
            const query = "SELECT * FROM moderator WHERE mod_id = ?"
            const result = await useQuery(query, [user_id]);

            if (result.length > 0) {
                return true;
            }
            return false;
        }
        catch (error) {
            console.log(error)
        }

    }
}