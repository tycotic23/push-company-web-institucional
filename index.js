

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

/* animacion banner */

let banner=document.getElementById("banner");
let childbanner;

 function CarouselMoveLeft(){
    /* animacion mover a la izquierda y quitar el primer elemento para llevarlo al final */
    childbanner=banner.firstElementChild;

    childbanner.classList.add("anim-fade-out");

   setTimeout(()=>{
        banner.firstElementChild.classList.remove("anim-fade-out");
        childbanner.classList.remove("anim-fade-in");
        banner.removeChild(childbanner);
        banner.appendChild(childbanner);
        banner.firstElementChild.classList.add("anim-fade-in");
      },500); //debe coincidir con la transicion o mas
    
      setTimeout(()=>{
        banner.firstElementChild.classList.remove("anim-fade-out");
        childbanner.classList.remove("anim-fade-in");
        canMove=true;
      },1000); //debe coincidir con la transicion o mas
    
  }

  function CarouselMoveRight(){
    childbanner=banner.lastElementChild;
    banner.firstElementChild.classList.add("anim-fade-out");
    

    setTimeout(()=>{
        banner.removeChild(childbanner);
        banner.insertBefore(childbanner,banner.firstElementChild);
        childbanner.classList.add("anim-fade-in");
        banner.firstElementChild.classList.remove("anim-fade-out");
      },500); //debe coincidir con la transicion o mas

      setTimeout(()=>{
        banner.firstElementChild.classList.remove("anim-fade-out");
        childbanner.classList.remove("anim-fade-in");
        canMove=true;
      },1000); //debe coincidir con la transicion o mas
    

    
    
    
  }

  let canMove=true;

  function CarouselToRight(){
    if(canMove){
      canMove=false;
        /* mover */
        CarouselMoveRight();
    }
    
  }

  function CarouselToLeft(){
    if(canMove){
      canMove=false;
       /* mover */
      CarouselMoveLeft();
      
    }
  }

  /* asignar funciones a los botones del banner */
  let btnBannerRight=document.querySelector(".infinite-carousel__right");
  let btnBannerLeft=document.querySelector(".infinite-carousel__left");

  btnBannerLeft.addEventListener('click',()=>{
    CarouselToLeft();
});

btnBannerRight.addEventListener('click',()=>{
    CarouselToRight();
});

/* temporizador del banner */
setInterval(()=>{
    CarouselToRight();
  },5000);

/* animacion de numeros */
const contadores=document.querySelectorAll(".contador")
const dataContadores=[
    {
        total:17,
        velocidad:60,
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
];
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
    observerIn.observe(elemento);
});
