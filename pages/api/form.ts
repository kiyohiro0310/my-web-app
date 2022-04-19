import { NextApiRequest, NextApiResponse } from "next";
import { addToDatabase, connectToDatabase } from "../../lib/db-utils";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { name, title, message } = req.body;
    const newMessage = { name, title, message };

    if(req.method === "POST"){
        let client;

        try{
            client = await connectToDatabase();

        }catch(error){
            res.status(500).json({message: "Error occurred. Closing database."});
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