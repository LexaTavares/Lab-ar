var barra=document.getElementById("barra");

  document.addEventListener("scroll", function(){
    if(window.scroll>50){
      cambiarColorBotonNav();
    }
  });
