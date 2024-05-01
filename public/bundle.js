'use strict';

const btnMenu = document.getElementById('icono_menu');
const overlay = document.getElementById('ventana');
const closeButton = document.getElementById('close-btn');

btnMenu.addEventListener('click', () => {
    overlay.classList.add('ventana--visible');
    document.body.style.overflow = overlay.classList.contains('ventana--visible') ? "hidden" : "";
});

closeButton.addEventListener('click', () => {
    overlay.classList.remove('ventana--visible');
    document.body.style.overflow = "";
});

const animacionLoading = () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('loader2');
    },2000);
    document.body.style.overflow = 'hidden';
    return new Promise((resolve) => setTimeout(resolve, animacionLoading));
};

const animacionTexto = (texto) => {
    const numeroLetras = texto.dataset.texto.length;
    const cursor = texto.querySelector('.cursor');
    cursor.classList.add('cursor--visible');
    
    for(let i = 0; i < numeroLetras; i++)
    {
        setTimeout(() => {
            const letra = document.createElement('span');
            letra.append(texto.dataset.texto[i]);
            texto.append(letra);
        }, 150 * i); 
    }
    setTimeout(() => {
        const cursorAnimado = [...texto.closest('.content-texto-escrito').querySelectorAll('.cursor')];
        const indexCursorActual = cursorAnimado.indexOf(cursor);
        if(indexCursorActual === 0){
            cursor.classList.add('cursor--active');
        }
    }, numeroLetras * 150);
    return new Promise((resolve) => setTimeout(resolve, numeroLetras * 30));
};

window.addEventListener("load", async () => {
  await animacionLoading(document.querySelector(".loader"));
  // Mostrar los primeros elementos
  setTimeout(async () => {
    document.body.style.overflow = '';
    document.querySelector(".content_nav").classList.add("content_nav--visible");
    document.querySelector(".text_div").classList.add("text_div--visible");
    document.querySelector(".titulo-span").classList.add("titulo-span--visible");
    document.querySelector(".titulo-p").classList.add("titulo-p--visible");
    document.querySelector(".foto_perfil").classList.add("foto_perfil--visible");
    document.querySelector(".iconos_redes").classList.add("iconos_redes--visible");
  }, 3800); // Puedes ajustar el tiempo según sea necesario
  
  // Iniciar la animación de escritura después de mostrar los primeros elementos
  setTimeout(async () => {
    await animacionTexto(document.querySelector(".titulo-h1"));
    // Mostrar el título una vez que haya finalizado la animación de escritura
    document.querySelector(".titulo-h1").classList.add("titulo-h1--visible");
  }, 4800); // Cambiado a 3800 para que inicie después de 3800 milisegundos
});
