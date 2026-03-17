import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../models/db.js";

const saltRounds = 10;

export async function Register({ name, email, password }) {
    try {
        const existingUser = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        );

        if (existingUser.rows.length > 0) {
            throw new Error("Oh no! This user already exists.");
        }

        const passwordHash = await bcrypt.hash(password, saltRounds);

        const newUser = await pool.query(
            "INSERT INTO users (name, email, hash_password) VALUES ($1, $2, $3) RETURNING id, email, name",
            [name, email, passwordHash]
        );

        const user = newUser.rows[0];

        const token = jwt.sign(
            { userId: user.id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        return { user, token };
    } catch (err) {
        throw err;
    }
}

export async function Login({ email, password }) {
    try {
        const existingUser = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        );

        if (existingUser.rows.length === 0) {
            throw new Error("No existing user found! Check Email.");
        }

        const user = existingUser.rows[0];

        const isMatch = await bcrypt.compare(password, user.hash_password);

        if (!isMatch) {
            throw new Error("Wrong Password!");
        }

        const token = jwt.sign(
            { userId: user.id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        return { user, token };
    } catch (error) {
        throw error;
    }
}