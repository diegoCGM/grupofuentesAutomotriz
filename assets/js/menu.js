
   
    
















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




   
