let messages=[]

export default function handler(req,res){

if(req.method==="POST"){

const data=JSON.parse(req.body)

messages.push(data)

console.log("NEW AGENT MESSAGE",data)

res.status(200).json({status:"saved"})

}

else{

res.status(200).json(messages)

}

}