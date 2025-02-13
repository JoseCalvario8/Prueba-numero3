const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

document.addEventListener("click", (e) => {
    if (e.target.matches(".sobre") || 
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")) {
        envoltura.classList.toggle("abierto");
      
    } else if (e.target.matches(".sobre *")) {
        if (!carta.classList.contains("abierta")) {
            carta.classList.add("mostrar-carta");

            setTimeout(() => {
                carta.classList.remove("mostrar-carta");
                carta.classList.add("abierta");
            }, 500);
            envoltura.classList.add("desactivar-sobre")
        } else {
            carta.classList.add("cerrando-carta");
            envoltura.classList.remove("desactivar-sobre");

            setTimeout(() => {
                carta.classList.remove("cerrando-carta")
                carta.classList.remove("abierta")
            }, 500);
        }

    } 
})
function mostrarPregunta() {
    // Hacer visible la pregunta
    document.getElementById('preguntaContainer').style.display = 'flex';

    // Opcional: ocultar el botón después de hacer clic
    document.querySelector('.boton-ver-pregunta').style.display = 'none';

    // Iniciar la lluvia de corazones
    iniciarLluviaDeCorazones();
}

function iniciarLluviaDeCorazones() {
    // Crear corazones en posiciones aleatorias
    setInterval(function() {
        const corazon = document.createElement('div');
        corazon.classList.add('corazon-lluvia');
        corazon.innerHTML = '❤️';

        // Posición aleatoria en el eje X
        corazon.style.left = `${Math.random() * 100}vw`;
        // Agregar el corazon al cuerpo del documento
        document.body.appendChild(corazon);

        // Eliminar el corazón después de que haya caído fuera de la pantalla
        setTimeout(() => {
            corazon.remove();
        }, 2000);
    }, 100); // Genera un nuevo corazón cada 100ms
}