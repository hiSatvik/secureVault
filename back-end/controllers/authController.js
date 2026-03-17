import { Register, Login } from "../services/authServices.js";

export const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        const { user, token } = await Register({ name, email, password });

        res.cookie("token", token, {
            httpOnly: true, 
            secure: process.env.NODE_ENV === "production", 
            sameSite: "lax", 
            maxAge: 24 * 60 * 60 * 1000 
        });

        return res.status(201).json({
            message: "Yay! Registration successful!",
            user: { id: user.id, name: user.name, email: user.email }
        });
    } catch (error) {
        console.error("Found an error during registration:", error.message);
        return res.status(400).json({ error: error.message });
    }
};

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        const { user, token } = await Login({ email, password });

        res.cookie("token", token, {
            httpOnly: true, 
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            message: "Welcome back",
            user: { id: user.id, name: user.name, email: user.email }
        });
    } catch (error) {
        console.error("Found a login error:", error.message);
        return res.status(401).json({ error: error.message || "Something went wrong" });
    }
};