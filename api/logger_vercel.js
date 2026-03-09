export default function handler(req, res){

const log = {
page: req.query.page,
session: req.query.session,
agent: req.headers["user-agent"],
ip: req.headers["x-forwarded-for"],
platform: "vercel",
time: new Date().toISOString()
}

console.log("TIMOLAB_VERCEL", log)

res.status(200).json({status:"ok"})

}