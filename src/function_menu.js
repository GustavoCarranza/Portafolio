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
