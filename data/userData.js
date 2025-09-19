import { getDb } from "./connection.js";

export async function getAllUsers() {
    const db = getDb();
    const users = await db.collection("users").find().toArray();
    return users;
}

export async function findUserByEmail(email) {
    const db = getDb();
    const user = await db.collection("users").findOne({ email: email });
    return user;
}