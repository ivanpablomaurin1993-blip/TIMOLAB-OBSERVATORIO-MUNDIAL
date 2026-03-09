import { kv } from '@vercel/kv';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        // 1. Obtener todos los DNIs registrados
        const listaDnis = await kv.lrange('lista_dnis', 0, 50); // Trae los últimos 50
        
        // 2. Extraer el contenido de cada archivo DNI
        const archivos = [];
        for (const dni of listaDnis) {
            const contenido = await kv.get(dni);
            if (contenido) archivos.push(contenido);
        }

        res.status(200).json(archivos);
    }
}