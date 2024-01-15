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




/* animacion de numeros */
const contadores=document.querySelectorAll(".contador")
const dataContadores=[
    {
        total:40,
        velocidad:30,
        salto:1,
        valor:0
    },
    {
        total:437,
        velocidad:15,
        salto:5,
        valor:0
    },
    {
        total:20000,
        velocidad:3,
        salto:75,
        valor:0
    },
    {
        total:80000,
        velocidad:2,
        salto:140,
        valor:0
    }
];/* 
const totalesContadores=[40,437,20000,80000];
const velocidadContadores=[30,8,2,2];
const saltoContadores=[1,5,100,200];
let cantidadesContadores=[0,0,0,0]; */
let contando=[];

/* propiamente la animacion del cambio de los numeros */
const animarContadores=()=>{
    contadores.forEach((contador,index)=>{
        contando.push(
            setInterval(()=>{
                dataContadores[index].valor+=dataContadores[index].salto;
                contadores[index].textContent=dataContadores[index].valor;
                if(dataContadores[index].valor>=dataContadores[index].total){
                    clearInterval(contando[index]);
                    contadores[index].textContent=dataContadores[index].total;
                }
            },dataContadores[index].velocidad)
        );
    });
};

/* funcion que anima los contadores y los hace aparecer */

const mostrarContadores= elementos=>{
    elementos.forEach(elemento=>{
        if(elemento.isIntersecting){
            elemento.target.classList.add("in-anim");
            setTimeout(animarContadores,400);
        }
    });
};

/* observer para los numeros */
const observer = new IntersectionObserver(mostrarContadores,{
    threshold:0.75
});

/* asignar observer a los numeros */
const divContadores=document.querySelector(".section-estadisticas");
observer.observe(divContadores);



/* cambiar menu con el scroll y demas animaciones de scroll*/

let nav=document.querySelector("nav");
let animados=document.querySelectorAll(".anim");
let auxiliarTop=0;

window.addEventListener('scroll',()=>{
    /* menu */
    nav.classList.toggle("nav-fixed",window.scrollY>50);

});


/* animaciones de scroll que aparecen */


const mostrarElementos= elementos=>{
    elementos.forEach(elemento=>{
        if(elemento.isIntersecting){
            elemento.target.classList.add("in-anim");
        }
    });
};

const observerIn = new IntersectionObserver(mostrarElementos,{
    threshold:0.75
});


const animElementos=document.querySelectorAll(".anim");
animElementos.forEach((elemento)=>{
    observer.observe(elemento);
});
