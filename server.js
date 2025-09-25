// data -> services -> controlers -> routes
import 'dotenv/config';
import app from './src/app.js';
import { connectToDatabase } from './src/data/connection.js';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connectToDatabase();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();