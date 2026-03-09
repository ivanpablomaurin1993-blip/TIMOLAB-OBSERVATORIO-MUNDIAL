function generarHoneyLogo(texto) {

    const canvas = document.getElementById("honeyLogo");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0,0,canvas.width,canvas.height);

    const centerX = canvas.width/2;
    const centerY = canvas.height/2;

    const palabras = texto.split(" ");

    palabras.forEach((palabra, i) => {

        const angle = (i / palabras.length) * Math.PI * 2;

        const x = centerX + Math.cos(angle) * 120;
        const y = centerY + Math.sin(angle) * 120;

        ctx.fillStyle = "#f5b942";
        ctx.font = "22px monospace";

        ctx.fillText(palabra, x, y);

    });

}