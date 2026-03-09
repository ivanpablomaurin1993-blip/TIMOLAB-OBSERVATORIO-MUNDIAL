export default function handler(req,res){

const log = {
page:req.query.page,
session:req.query.session,
agent:req.headers["user-agent"],
platform:"generic",
time:new Date().toISOString()
}

console.log("TIMOLAB_GENERIC", log)

res.status(200).end()

}