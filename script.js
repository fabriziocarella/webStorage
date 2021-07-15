/***********************Ejercicios LOCAL STORAGE***********************/
/* 1. Formulario de contacto - Local Storage - Crear un formulario de contacto con los siguientes campos:
Nombre
Email
Mensaje
Guardar en Local Storage los datos de contacto enviados de cada usuario
Mostrar los datos de los contactos guardados en el DOM
Usa JSON.parse() y JSON.stringify() para guardar muchos datos usando la misma clave */
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    //Recogemos en variables, el valor de los inputs del formulario
    let username = document.querySelector("input[name='nombre']").value
    console.log(username);
    let user_email = document.querySelector("input[name='email']").value
    console.log(user_email);
    let observacion = document.querySelector("textarea[name='obs']").value
    console.log(observacion);
    //Añadimos las variables (el valor del input) al local storage
    localStorage.setItem("name", username)
    localStorage.setItem("email", user_email)
    localStorage.setItem("observacion", observacion)
    //!Segunda parte: IMPRIMIR EN EL DOM
    //Recogemos los datos del local storage.
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        //console.log(`${key}: ${localStorage.getItem(key)}`);
        let container = document.createElement("div")
        let paragraph = document.createElement("p")
        document.querySelector("body").appendChild(container)
        document.querySelector("body").appendChild(paragraph)
        container.appendChild(paragraph)
        paragraph.textContent = `${key}: ${localStorage.getItem(key)}`
    }
    // Creamos el array para que sea más legible. Escribimos el array
    let keyToArray = [username, user_email, observacion]
    //console.log(keyToArray);
    localStorage.setItem("user1", JSON.stringify(keyToArray)); //Almacena el array user 1 = [...]
    // Leemos el array    
    let viewUser = JSON.parse(localStorage.getItem("user1"));
    console.log(viewUser);
})
/* 2. Avanzado - Local Storage
Crea botón para borrar todos los contactos guardados en Local Storage
Crea botón para borrar un contacto en concreto de Local Storage*/
document.querySelector("button[name='borrarTodo']").addEventListener("click", (event) => {
    localStorage.clear()
})

document.querySelector("button[name='borraruser']").addEventListener("click", (event) => {
    let userToDelete = document.querySelector("input[name='borraruser']").value
    //console.log(userToDelete);
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        if (key == userToDelete) {
            localStorage.removeItem(key)
        } else {
            console.log(`El usuario no existe`);
        }
    }
})
//Aqui tenemos que usar la variabla de usarios de manera dinamica