import { NextApiRequest, NextApiResponse } from "next";
import { addToDatabase, connectToDatabase } from "../../lib/db-utils";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const newMessage = req.body;

    if(req.method === "POST"){
        let client;

        try{
            client = await connectToDatabase();

        }catch(error){
            res.status(500).json({message: "Connection failed"});
            return;
        }

        try{
            const result = await addToDatabase(client, "ContactMessage", newMessage);
            res.status(200).json({data: result});
            client.close();

        }catch(error) {
            res.status(500).json({message: "Error occurred."})
            client.close();
            return;
        }
    }
}

export default handler;