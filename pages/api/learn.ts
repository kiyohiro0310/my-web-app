// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { addToDatabase, connectToDatabase } from '../../lib/db-utils';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const newPost = req.body;

  if(req.method === "POST"){
    let client;

    try{
      client = await connectToDatabase();

    }catch(error){
      res.status(500).json({message: "Connection failed"});
      return;
    }

    try{
      const result = await addToDatabase(client, "LearnPosts", newPost);
      res.status(200).json({data: result});
      client.close();

    }catch(error){
      res.status(500).json({message: "Insertion failed."});
      return;
    }
  }
}

export default handler;