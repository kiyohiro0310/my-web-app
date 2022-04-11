// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ContentModel } from '../../Model/dev-content-model';


async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContentModel[]>
) {

}

export default handler;