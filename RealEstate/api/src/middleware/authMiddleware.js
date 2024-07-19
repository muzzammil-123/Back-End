import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const authMiddleware = async (req, res, next) => {
    try {
        let token = req.headers.authorization;

        if (!token && req.cookies.token) {
            token = req.cookies.token;
        }

        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
            if (err) {
                return res.status(401).json({ message: 'Invalid token' });
            }

            req.userId = payload.id;
            next();
        });
    } catch (error) {
        console.error('Error in authMiddleware:', error);
        res.status(500).json({ message: error.message });
    }
};
