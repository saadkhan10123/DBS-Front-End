/** 
 * Function to load data from MySQL database.
 * @returns {Promise<{status: number, actor: any}>} 
 */

import mysql from 'mysql2'; 
import dotenv from 'dotenv'; 
dotenv.config(); 

<<<<<<< HEAD
/**
 * Asynchronously loads data from the MySQL database.
 * @returns {Promise<{status: number, actor: any}>} An object with HTTP status and fetched data.
 */
export async function load() {
    // Creating a connection pool to the MySQL database using environment variables
=======
export async function load({ locals }) {
>>>>>>> 146a842838af86f2955abb7c2844b6eadc62f8bd
    const pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER, 
        password: process.env.DB_PASSWORD, 
        database: process.env.DB_NAME 
    }).promise(); 
    
    
<<<<<<< HEAD
    // Test SQL query
    const result = await pool.query('SELECT * FROM class');
    const actor = result[0];
=======
    const result = await pool.query(`SELECT * FROM ${process.env.TUPLE_NAME}`)
    let actor = result[0]
>>>>>>> 146a842838af86f2955abb7c2844b6eadc62f8bd

    // Returning an object with HTTP status code 200 and fetched data
    return {
        status: 200,
        actor
    };
}
