import express from "express";
import { fetchAllUsers, getUserByEmail } from "../controllers/userController.js";

const router = express.Router();

router.get("/", fetchAllUsers);
router.get("/:email", getUserByEmail);

// TODO: Implementar las rutas para crear, actualizar y eliminar usuarios
// router.post("/users", createUser);
// router.put("/users/:id", updateUser);
// router.delete("/users/:id", deleteUser);

export default router;