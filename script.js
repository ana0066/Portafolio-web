let menuVisible = false;
//función que oculta o muestra el menu

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menuz una vez que se seleccione una opción
    document.getElementById("nav").classList="";
    menuVisible = false;
}

//fincion que aplica las animaciones a la barra de skills
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades(0).classList.add("javascript");
        habilidades(1).classList.add("diseño");
        habilidades(2).classList.add("html");
        habilidades(3).classList.add("python");
        habilidades(4).classList.add("office");
    } 
}


//detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}