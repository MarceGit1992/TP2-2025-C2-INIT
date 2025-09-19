import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI;

if(!uri) {
  throw new Error("MONGO_URI no esta definida en las variables de entorno");
}

let client;
let db;

export async function connectToDatabase() {
    if(!client) {
        try {
            client = new MongoClient(uri);
            await client.connect();
            db = client.db("sample_tp2");
            console.log("Conexion a MongoDB establecida");
        }
         catch (error) {
            console.error("Error al conectar a MongoDB:", error);
            throw error;
        }
    }

    return db;
}

export function getDb() {
    if(!db) {       
        throw new Error("Primero debes conectar a la base de datos usando connectToDatabase");
    }

    return db;
}