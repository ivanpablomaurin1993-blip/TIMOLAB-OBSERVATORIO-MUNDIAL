import { kv } from '@vercel/kv';

export default async function handler(req, res) {

  const nodes = await kv.lrange("timolab_question_nodes", 0, 100);

  res.status(200).json(nodes);

}