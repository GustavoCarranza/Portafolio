import "./function_menu.js";
import animacionLoading from "./function_loadingText.js";
import animacionTexto from "./function_animarTexto.js";

window.addEventListener("load", async () => {
  await animacionLoading(document.querySelector(".loader"));
  
  // Mostrar los primeros elementos
  setTimeout(async () => {
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