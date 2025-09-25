import { getUsers, findUser } from "../services/userService.js";

export async function fetchAllUsers(req, res) {
    try {
        const users = await getUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export async function getUserByEmail(req, res) {
    const email = req.params.email;
    try {
        const user = await findUser(email);
        if(user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        console.error("Error fetching user by email:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}