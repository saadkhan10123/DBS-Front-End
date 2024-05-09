import mysql from 'mysql2'; 
import dotenv from 'dotenv'; 
dotenv.config(); 

export async function load() {
    // Creating a connection pool to the MySQL database using environment variables
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER, 
        password: process.env.DB_PASSWORD, 
        database: 'sakila'
    }).promise(); 
    
    
    const result = await connection.query(`SELECT * FROM ${process.env.TUPLE_NAME}`)
    let actor = result[0]

    // Returning an object with HTTP status code 200 and fetched data
    return {
        status: 200,
        actor
    };
}
