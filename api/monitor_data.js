import fs from "fs";
import path from "path";

export default function handler(req, res) {

    const filePath = path.join(process.cwd(), "data", "ai_logs.json");

    try {

        const fileData = fs.readFileSync(filePath, "utf8");
        const jsonData = JSON.parse(fileData);

        // devolver SOLO el array
        res.status(200).json(jsonData.entradas || []);

    } catch (error) {

        res.status(500).json({ error: "No se pudo leer la bóveda TIMOLAB" });

    }

}