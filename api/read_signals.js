import { kv } from '@vercel/kv';

export default async function handler(req, res) {

  const signals = await kv.lrange("timolab_signals", 0, 100)

  res.status(200).json(signals)

}