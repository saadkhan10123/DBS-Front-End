/** @type {import('./$types').PageServerLoad} */
import user from '$lib/User/user.js';
import { fail } from '@sveltejs/kit';
import mysql from "mysql2"
import dotenv from 'dotenv';
dotenv.config();

export async function load({ cookies }) {
    const userInfo = await user.getUser(cookies.get('session_id'));
    return {
        userInfo
    };
};

export const actions = {
    changePassword: async ({ request, cookies }) => {
        let data = await request.formData()

        let oldPassword = data.get("oldPassword")
        let newPassword = data.get("newPassword")
        let confirmPassword = data.get("confirmPassword")

        if (newPassword !== confirmPassword) {
            return fail(400, { message: "Passwords do not match"})
        }

        console.log(user)
        const userInfo = await user.getUser(cookies.get('session_id'));

        if (userInfo.password !== oldPassword) {
            return fail(400, { message: "Incorrect Password"})
        }

        const connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER, 
            password: process.env.DB_PASSWORD, 
            database: process.env.DB_NAME
        }).promise();

        await connection.query("UPDATE users SET password = ? WHERE user_id = ?", [newPassword, userInfo.user_id])

        return {
            status: 200,
            type: 'success',
        }
    }
}