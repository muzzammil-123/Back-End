import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userRegister = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        console.log(req.body);
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });


        await newUser.save();

        res.status(200).json({ msg: "User Created" });
    } catch (error) {
        console.error("Error in user registration:", error);
        res.status(500).json({ msg: "Failed to register user" });
    }
};

const userLogin = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ msg: "Please enter all fields" });
        }
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ msg: "User does not exist" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        const option = {
            httpOnly: true,
            secure: true
        }
       return res.cookie("token", token, option).status(200).json({ msg: "Logged in successfully", token, user });
    } catch (error) {
        console.error("Error in user login:", error);
        res.status(500).json({ msg: "Failed to login" });
    }
};

const userLogout = async (req, res) => {
    res.clearCookie("token");
    res.status(200)
    res.json({ msg: "Logged out successfully" });
};

const userUpdate = async (req, res) => {
    const userId = req.userId;
    try {
        const user = await User.findById(userId);
        user.username = req.body.username;
        user.email = req.body.email;
        user.password = req.body.password;
        user.avatar = req.body.avatar;
        await user.save();
        res.status(200).json({ msg: "User updated successfully" });

    } catch (error) {
        res.status(500).json({ msg: "Failed to update user" });
    }
}

export { userRegister, userLogin, userLogout , userUpdate };
