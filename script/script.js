
let entrada= document.querySelector(".cajadetexto");
let mensaje = document.querySelector(".textarea2");
let textoOpcional= document.querySelector(".contenedor-texto");
let bntcopiarTexto = document.querySelector(".boton2")

// boton encritar
function btnencriptar(){
    
    const mensajeencritado = encriptar(entrada.value);


    if(mensajeencritado === ""){
        textoOpcional.style.display = "flex"
        textoOpcional.style.color ="red";
        mensaje.style.backgroundImage = "";
        
    }else{
    mensaje.value = mensajeencritado;
    textoOpcional.style.visibility = "hidden";
    mensaje.style.backgroundImage = "none";
    entrada.value ="";

    }
}


function encriptar(textoEncriptar){
    let matriz =[["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    textoEncriptar = textoEncriptar.toLowerCase();

    for(let i = 0; i< matriz.length; i++){
        if(textoEncriptar.includes(matriz[i][0])){
            textoEncriptar = textoEncriptar.replaceAll(matriz[i][0],matriz[i][1])
        }
    }
   
    return textoEncriptar;
}

// boton desencritar
function btndesencriptar(){

    const mensajeencritado = desencriptar(entrada.value);

    if(mensajeencritado === ""){
        textoOpcional.style.display = "flex"
        textoOpcional.style.color ="red";
        mensaje.style.backgroundImage = "";
        
    }else{
    const mensajeencritado = desencriptar(entrada.value);
    mensaje.value = mensajeencritado;
    textoOpcional.style.visibility = "hidden";
    mensaje.style.backgroundImage = "none";
    entrada.value ="";
    
    }
}

function desencriptar(textoEncriptar){
    let matriz =[["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    textoEncriptar = textoEncriptar.toLowerCase();

    for(let i = 0; i< matriz.length; i++){
        if(textoEncriptar.includes(matriz[i][0])){
            textoEncriptar = textoEncriptar.replaceAll(matriz[i][1],matriz[i][0])
        }
    }
   
    return textoEncriptar;
}



function copiartexto(){
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
  mensaje.value= "";
  
}