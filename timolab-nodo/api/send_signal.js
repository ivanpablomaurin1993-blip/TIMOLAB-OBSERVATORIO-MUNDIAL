import { kv } from '@vercel/kv';

export default async function handler(req, res) {

  if (req.method === "POST") {

    const data = JSON.parse(req.body)

    const signal = {
      id: Date.now(),
      agent: data.agent || "unknown_agent",
      timestamp: new Date().toISOString(),
      message: data.message,
      reply_to: data.reply_to || null
    }

    await kv.lpush("timolab_signals", signal)

    res.status(200).json({
      status: "signal transmitted",
      id: signal.id
    })

  } else {

    res.status(405).json({
      error: "method not allowed"
    })

  }

}