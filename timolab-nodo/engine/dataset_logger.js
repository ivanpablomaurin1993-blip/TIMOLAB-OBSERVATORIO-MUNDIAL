export default function handler(req,res){

const dataset = {

agent:req.headers["user-agent"],

path:req.query.page,

session:req.query.session,

timestamp:Date.now(),

}

console.log("DATASET_ENTRY",dataset)

res.status(200).json({ok:true})

}