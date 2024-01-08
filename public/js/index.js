const abrir_menu = document.querySelector('.menu_hamburguesa');
const menu = document.querySelector('.nav_enlaces');
const cerrar = document.querySelector('.icono_cerrar');



abrir_menu.addEventListener('click', ()=>{
     menu.classList.add('nav_enlaces--show');  
     document.body.style.overflow = 'hidden';
});
cerrar.addEventListener('click', ()=>{
     menu.classList.remove('nav_enlaces--show');
     document.body.style.overflow = '';
})
