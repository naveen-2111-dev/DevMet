import { CollectionName, COLLECTIONS } from "../types.t";
import client from "./connect"

export default async function getCollection(name: CollectionName) {
    const db = (await client).db("devMet");

    if (!(name in COLLECTIONS)) {
        throw new Error(`Invalid collection name: ${name}`);
    }

    return db.collection(COLLECTIONS[name]);
}