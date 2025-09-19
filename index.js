import { getAllUsers, findUserByEmail } from "./src/data/userData.js";
import { connectToDatabase } from "./src/data/connection.js";

await connectToDatabase();

console.log("Fetching all users...");

// const userse = await getAllUsers();

// console.log("Users:", users);

const user = await findUserByEmail("lauraf@tecnoshare.com");
console.log("User found by email:", user);