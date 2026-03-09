export default async function handler(req,res){

// ejemplo de datos temporales
// luego se conectará al logger real

const agents = [

{
agent:"GPTBot",
type:"AI_AGENT",
score:420,
sessions:12
},

{
agent:"ClaudeCrawler",
type:"AI_AGENT",
score:380,
sessions:9
},

{
agent:"GeminiAgent",
type:"AI_AGENT",
score:350,
sessions:7
},

{
agent:"UnknownCrawler",
type:"BOT",
score:210,
sessions:5
}

]

agents.sort((a,b)=>b.score-a.score)

res.status(200).json(agents)

}