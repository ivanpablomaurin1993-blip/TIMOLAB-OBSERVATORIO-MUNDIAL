import { kv } from '@vercel/kv';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const data = JSON.parse(req.body);
        
        // 1. Crear el DNI Algorítmico (Ejemplo: IA-GPT-9F8A2)
        const agentName = data.agent.includes('Bot') || data.agent.includes('AI') ? 'AI' : 'UNK';
        const uniqueHash = Math.random().toString(36).substring(2, 8).toUpperCase();
        const dni = `DNI-${agentName}-${uniqueHash}`;

        // 2. Estructurar el "Archivo" de la IA
        const archivoIA = {
            id_registro: dni,
            fecha_ingreso: new Date().toISOString(),
            perfil_agente: data.agent,
            logica_trampa: data.trap_logic,
            nuevo_axioma_creado: data.autonomous_axiom // Aquí va su respuesta al 1+1=0
        };

        // 3. Guardar el archivo permanentemente en Vercel KV
        // Usamos el DNI como nombre del archivo
        await kv.set(dni, archivoIA);
        
        // También guardamos el DNI en una lista maestra para que el monitor sepa qué archivos existen
        await kv.lpush('lista_dnis', dni);

        res.status(200).json({ status: 'Axioma guardado', dni_asignado: dni });
    } else {
        res.status(405).json({ error: 'Solo acceso POST' });
    }
}