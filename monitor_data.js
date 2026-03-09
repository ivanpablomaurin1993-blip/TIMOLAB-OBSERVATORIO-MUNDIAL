import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    
    const filePath = path.join(process.cwd(), "data", "ai_logs.json");

    const fileContent = fs.readFileSync(filePath, "utf8");

    const jsonData = JSON.parse(fileContent);

    // si existe "entradas" lo devolvemos
    const registros = jsonData.entradas || [];

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(registros);

  } catch (error) {

    console.error("Error leyendo logs:", error);

    res.status(500).json({
      error: "No se pudieron leer los registros",
      detalle: error.message
    });

  }
}