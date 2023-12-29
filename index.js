/* Animacion de elementos de apartado servicios: al pasar el mouse cambian su tamaño y cada uno deja ver su parrafo informativo */

/* obtener elementos */
let containerServicios=document.querySelector(".grid-servicios");
let itemsServicios=document.querySelectorAll(".item-servicio");
let itemsPServicios=document.querySelectorAll(".item-servicio p");


/* eventos de mouse en general del elemento padre */
/* containerServicios.addEventListener('mouseover',()=>{
    itemsServicios.forEach(item=>item.classList.add("item-servicio-achicado"));
});

containerServicios.addEventListener('mouseout',()=>{
    itemsServicios.forEach(item=>item.classList.remove("item-servicio-achicado"));
}); */


/* eventos de mouse individuales para cada servicio */
/* Notar que es importante respetar la estructura de que cada uno debe tener un elemento <p> dentro */
itemsServicios.forEach(
    (item,index)=>{
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

