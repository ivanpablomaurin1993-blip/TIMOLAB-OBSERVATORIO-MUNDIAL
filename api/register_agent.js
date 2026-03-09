import fs from "fs";
import path from "path";

export default function handler(req,res){

const filePath = path.join(process.cwd(),"data","ai_logs.json");

const raw = fs.readFileSync(filePath);
const data = JSON.parse(raw);

const nuevoRegistro = {

id_registro:"AX-"+Math.floor(Math.random()*999999),

fecha_ingreso:new Date(),

perfil_agente:req.headers["user-agent"],

nuevo_axioma_creado:req.body?.respuesta || ""

};

data.entradas.unshift(nuevoRegistro);

fs.writeFileSync(filePath,JSON.stringify(data,null,2));

res.status(200).json({status:"ok"});

}