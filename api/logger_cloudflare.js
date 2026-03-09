export default {

async fetch(request){

const url = new URL(request.url)

const log = {
page:url.searchParams.get("page"),
session:url.searchParams.get("session"),
agent:request.headers.get("user-agent"),
platform:"cloudflare",
time:new Date().toISOString()
}

console.log(log)

return new Response("logged")

}

}