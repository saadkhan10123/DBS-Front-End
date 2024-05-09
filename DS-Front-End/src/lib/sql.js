import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

export async function useQuery(query, params) {
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }).promise();

    const result = await connection.query(query, params);

    connection.end();
    return result[0];
}