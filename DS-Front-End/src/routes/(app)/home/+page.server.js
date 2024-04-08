import mysql from 'mysql2'; 
import dotenv from 'dotenv'; 
dotenv.config(); 

/**
 * Asynchronously loads data from the MySQL database.
 * @returns {Promise<{status: number, actor: any}>} An object with HTTP status and fetched data.
 */
export async function load() {
    // Creating a connection pool to the MySQL database using environment variables
    const pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER, 
        password: process.env.DB_PASSWORD, 
        database: process.env.DB_NAME 
    }).promise(); 
    
    
    const result = await pool.query(`SELECT * FROM ${process.env.TUPLE_NAME}`)
    let actor = result[0]

    // Returning an object with HTTP status code 200 and fetched data
    return {
        status: 200,
        actor
    };
}
