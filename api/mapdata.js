export default function handler(req,res){

const agents=[

{
agent:"GPTBot",
type:"AI_AGENT",
lat:37.7,
lon:-122.4,
score:420
},

{
agent:"ClaudeCrawler",
type:"AI_AGENT",
lat:48.8,
lon:2.3,
score:380
},

{
agent:"GeminiAgent",
type:"AI_AGENT",
lat:37.4,
lon:-122.1,
score:350
}

]

res.status(200).json(agents)

}