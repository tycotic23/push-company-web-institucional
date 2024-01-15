/* Animacion de elementos de apartado servicios: al pasar el mouse cambian su tamaño y cada uno deja ver su parrafo informativo */

/* obtener elementos */
let containerServicios=document.querySelector(".grid-servicios");
let itemsServicios=document.querySelectorAll(".item-servicio");
let itemsPServicios=document.querySelectorAll(".item-servicio-contenido div");





/* eventos de mouse individuales para cada servicio */
/* Notar que es importante respetar la estructura de que cada uno debe tener un elemento <div> dentro */
itemsServicios.forEach((item,index)=>{
        item.addEventListener('mouseout',()=>{
            itemsPServicios[index].style.opacity='0';
            itemsPServicios[index].style.minHeight='40%';
            itemsPServicios[index].style.height='0';
        });

        item.addEventListener('mouseover',()=>{
            itemsPServicios[index].style.opacity='1';

            itemsPServicios[index].style.minHeight='60%';
            itemsPServicios[index].style.height='auto';
        });
});




/* eventos del icono del menu hamburguesa */
let menuIcon=document.querySelector(".menu-icon");
let menu=document.querySelector(".menu");


menuIcon.addEventListener('click',()=>{
    menu.classList.toggle("toggle-menu");
    menu.classList.toggle("ocultar");
});


menu.addEventListener('click',()=>{
        menu.classList.remove("toggle-menu");
        menu.classList.add("ocultar");
});

/* cambiar menu con el scroll */

let nav=document.querySelector("nav");

window.addEventListener('scroll',()=>{
    nav.classList.toggle("nav-fixed",window.scrollY>50);
});
