import { MongoClient } from "mongodb";
import dotenv from "dotenv"

dotenv.config();

const URI = process.env.NEXT_MONGO_DB_URL;
const options = {}

if (!URI) {
    throw new Error("Please define the NEXT_MONGO_DB_URL environment variable inside .env.local");
}

const client: MongoClient = new MongoClient(URI, options);
const clientPromise: Promise<MongoClient> = client.connect()
    .then(() => {
        /* eslint-disable no-console */
        console.log("Connected to MongoDB");
        return client;
        /* eslint-enable no-console */
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
        throw error;
    });

export default clientPromise;