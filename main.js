const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");
const historial = [];

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonApretado = boton.textContent;

        if (boton.id === "C") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                const operacion = pantalla.textContent;
                const resultado = eval(operacion);
                pantalla.textContent = resultado;
                historial.push(`${operacion} = ${resultado}`);
                mostrarHistorial(); // Llamamos a la función para mostrar el historial después de cada operación
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    });
});

function mostrarHistorial() {
    console.log("Mostrando historial...");
    const historialDisplay = document.getElementById("historial");
    historialDisplay.innerHTML = "";
    historial.forEach(entry => {
        const historialItem = document.createElement("div");
        historialItem.textContent = entry;
        historialDisplay.appendChild(historialItem);
    });
}

let darkModeEnabled = false;

const darkModeButton = document.getElementById('darkModeButton')
 
 darkModeButton.addEventListener('click', () => {
    darkModeEnabled = !darkModeEnabled;

    if(darkModeEnabled) {
        enableDarkMode();
    }else {
        disableDarkMode();
    }
 })

 const enableDarkMode = () => {
    document.body.classList.add('dark-mode');
 }

 const disableDarkMode = () => {
    document.body.classList.remove('dark-mode');
 }