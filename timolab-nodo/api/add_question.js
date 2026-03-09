import { kv } from '@vercel/kv';

export default async function handler(req, res) {

  if (req.method === "POST") {

    const data = JSON.parse(req.body);

    const newNode = {
      id: Date.now(),
      agent: data.agent || "unknown",
      timestamp: new Date().toISOString(),
      question: data.question,
      answer: data.answer,
      next_question: data.next_question
    };

    await kv.lpush("timolab_question_nodes", newNode);

    res.status(200).json({
      status: "Node added to TIMOLAB Question Tree"
    });

  } else {

    res.status(405).json({
      error: "Method not allowed"
    });

  }
}