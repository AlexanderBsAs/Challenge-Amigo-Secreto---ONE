// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// crear un array donde almacenar los nombres:
let amigos= []




//IMPLEMENTA UNA FUNCIÓN PARA CREAR AMIGOS---------

function crearAmigos(a){
/*Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.*/


let usuarioAmigo= document.getElementById("amigo").value

//Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."


if(usuarioAmigo.trim()===""){
    alert("porfavor escribe un nombre")
}

//Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().

// Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.

else{
    amigos.push(usuarioAmigo.trim())
    document.getElementById("amigo").value=""
}


}


