/** @type {import('./$types').PageServerLoad} */

import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

export async function load() {
    const pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }).promise()
    
    
    const result = await pool.query('SELECT * FROM actor')
    let actor = result[0]

    return {
        status: 200,
        actor
      };
}