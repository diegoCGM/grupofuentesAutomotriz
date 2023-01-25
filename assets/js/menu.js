
    let slider = document.querySelector(".slider");

    let imagenes = slider.querySelectorAll("img");

    console.log(imagenes);
    let i=0;

    setInterval(function(){


        let porsentaje = i*-100;

        slider.style.transform="translateX("+porsentaje+"%)";
        i++;
        if(i>(imagenes.length-1)){

            i=0;
        }
     
       console.log(i);
    },3000);

















const btnmenu = document.querySelector(".btn-menu");
let menu = document.querySelector(".conainer-menuvertical");

const imagen = document.querySelector(".cambio");



btnmenu.addEventListener("click",function(){

   console.log("hola");
  
   if(menu.className =="conainer-menuvertical oculto"){

    menu.className="conainer-menuvertical vista"

   imagen.src="assets/imagenes/cerrar.png";



}else{

    menu.className= "conainer-menuvertical oculto";
    imagen.src="assets/imagenes/icon-menu.png";
}
    
    
    
    });


    //slider




   
