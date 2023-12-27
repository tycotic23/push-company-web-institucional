let containerServicios=document.querySelector(".grid-servicios");
let itemsServicios=document.querySelectorAll(".item-servicio");
console.log(itemsServicios);
containerServicios.addEventListener('mouseover',()=>{
    itemsServicios.forEach(item=>item.classList.add("item-servicio-achicado"));
    console.log("ay ay ay");
});

containerServicios.addEventListener('mouseout',()=>{
    itemsServicios.forEach(item=>item.classList.remove("item-servicio-achicado"));
});