import { MongoClient } from "mongodb";

export async function connectToDatabase() {
    const client = await MongoClient.connect("mongodb+srv://Kiyohiro:a1b2c3d4e5A@cluster0.mvh0o.mongodb.net/KiyoWebApp?retryWrites=true&w=majority");

    return client;
}

export const getAllDBContent = async (client: MongoClient, collection: string) => {
    const db = client.db();

    const allDBContents = db.collection(collection).find().toArray();

    return allDBContents;
}
