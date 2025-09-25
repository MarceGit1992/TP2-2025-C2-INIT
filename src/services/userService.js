import { findUserByEmail, getAllUsers } from "../data/userData.js";

export async function getUsers() {
    return await getAllUsers();
}

export async function findUser(email) {
    return await findUserByEmail(email);
}