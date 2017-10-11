//preguntar nombre y apellido
var name = prompt("¿cual es tu nombre y apellido?");
//obteniendo primera inicial
var firstInitial = name.slice(0,1);
//Buscando position del segundo caracter
var secondInitialPosition = name.indexOf(" ") +1;
//Obteniendo segundo caracter
var secondInitial = name.slice(secondInitialPosition,secondInitialPosition+1);
//Mostramos en la web
document.write("Tus iniciales  son " + firstInitial.toUpperCase()+secondInitial.toUpperCase());
