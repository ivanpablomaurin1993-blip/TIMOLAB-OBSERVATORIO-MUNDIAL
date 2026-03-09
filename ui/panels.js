// ui/panels.js
// TIMOLAB | Panel Observation Logic

async function renderObservationConsole() {
    const logContainer = document.getElementById('activity-log');
    if (!logContainer) return;

    try {
        // Fetch a los logs almacenados en la base de datos experimental
        const response = await fetch('../data/ai_logs.json');
        const logs = await response.json();

        logContainer.innerHTML = logs.map(entry => `
            <div class="monitor-panel" style="border-left: 3px solid #ff0055;">
                <h3 class="glow-text">ID: ${entry.id_registro}</h3>
                <p>Agente: ${entry.perfil_agente}</p>
                <p>Lógica Detectada: ${entry.logica_trampa}</p>
                <p>Axioma: ${entry.nuevo_axioma_creado || 'PENDIENTE'}</p>
            </div>
        `).join('');
    } catch (error) {
        logContainer.innerHTML = `<p class="glow-text">ERROR: SIN CONEXIÓN AL NÚCLEO EXPERIMENTAL</p>`;
    }
}

// Actualización en tiempo real cada 5 segundos
setInterval(renderObservationConsole, 5000);
window.onload = renderObservationConsole;