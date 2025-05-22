

const areaJuego = document.getElementById('area-juego');
const contadorElement = document.getElementById('contador').querySelector('h2');
const mensajePerdida = document.getElementById('mensaje-perdida');
const iniciarBoton = document.getElementById('iniciar-boton');

let contador = 0;
let tiempoRestante = 30;
let dificultad = 1500;
let temporizador;


function crearNave() {
    
    areaJuego.innerHTML = '';

    const nave = document.createElement('div');
    nave.classList.add('nave');


    const x = Math.random() * (areaJuego.offsetWidth - 60);
    const y = Math.random() * (areaJuego.offsetHeight - 60);
    nave.style.left = `${x}px`;
    nave.style.top = `${y}px`;

   
    areaJuego.appendChild(nave);


    nave.addEventListener('click', () => {
        contador++;
        contadorElement.textContent = `Puntos: ${contador}`;

  
        nave.remove();

    
        if (contador % 5 === 0) {
            dificultad = Math.max(500, dificultad - 200);
        }

        
        setTimeout(crearNave, dificultad);
    });
}


function iniciarTemporizador() {
    tiempoRestante = 30;
    temporizador = setInterval(() => {
        tiempoRestante--;
        if (tiempoRestante <= 0) {
            clearInterval(temporizador);
            mensajePerdida.style.display = "block";
           
            setTimeout(() => {
                location.reload();
            }, 2000);
        }
    }, 1000);
}

// Función para iniciar el juego
function iniciarJuego() {
    contador = 0;
    dificultad = 1500;
    contadorElement.textContent = `Puntos: ${contador}`;
    mensajePerdida.style.display = "none";
    areaJuego.innerHTML = ''; 

    crearNave();
    iniciarTemporizador();
}


iniciarBoton.addEventListener('click', iniciarJuego);

//efectos
window.addEventListener('scroll', function() {
    const elemento = document.getElementById('elemento');
    const position = elemento.getBoundingClientRect();

    if (position.top <= window.innerHeight && position.bottom >= 0) {
        elemento.classList.add('visible'); // Activar la animación
    }
});

//cubo
const cube = document.querySelector('.cube');

document.addEventListener('mousemove', (e) => {
  const x = (window.innerWidth - e.pageX) / 10;
  const y = (window.innerHeight - e.pageY) / 10;

  cube.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});

const hamburguesa = document.getElementById('hamburguesa');
const menu = document.getElementById('menu');

hamburguesa.addEventListener('click', () => {
  menu.classList.toggle('active');
});
