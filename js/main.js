localStorage.setItem("saludo", "bienvenido a likehome")
const saludar = localStorage.getItem("saludo")
console.log("", saludar);


let nombre = prompt("¿cual quieres que sea tu nombre de usuario?");
alert("bienvenido")

sessionStorage.setItem("usuario", nombre)
const  unnombre = sessionStorage.getItem("usuario")
console.log("los usuarios registrados son: ", unnombre);

const NOMBREUSUARIO = nombre;

let contraseña = prompt("¿que contraseña quiere ingresar?");

sessionStorage.setItem("usuariocontra", contraseña)
const  unacontra= sessionStorage.getItem("usuariocontra")
console.log("los usuarios registrados son: ", unacontra);

document.getElementById("inputnombre").value = nombre
document.getElementById("inputcontra").value = contraseña

function checkAge() {
    var cumple = document.getElementById("cumple").value;
    var edad = getAge(cumple);

    if (edad >= 18) {
        // El usuario es mayor de 18 años, lo dejamos acceder a la página.
        document.getElementById("fechaedad").style.display = "none";
        alert("bienvenido " + nombre)
    } else {
        // El usuario es menor de 18 años, lo redirigimos a otra página.
        alert("eres menor no puedes ingresar")
}
}

function getAge(cumple) {
    var today = new Date();
    var cumpleObj = new Date(cumple);
    var edad = today.getFullYear() - cumpleObj.getFullYear();
    var month = today.getMonth() - cumpleObj.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < cumpleObj.getDate())) {
        edad--;
    }

    return edad;
}


class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    toString = function () {
        return this.nombre + "( $" + this.precio.toFixed(2) + ")";
    }
}


let misproductos = [];

let respuesta = "SI";

do {
    let nombre = prompt("ingrese el nombre del producto")
    let precio = parseInt(prompt("ingrese el precio del producto"))
    const unproducto = new Producto(nombre, precio)
    misproductos.push(unproducto)
    console.log("la cantidad de productos que hay en mi lista ", misproductos.length);
    respuesta = prompt("¿quieres seguir agregando productos? si/no")
} while (respuesta.toUpperCase() !== "NO");

console.log("esta es la lista de los productos que cargue ", misproductos);


misproductos.forEach((unproducto) => {
    console.log("--> " + unproducto.toString());
})

localStorage.setItem("almacen", misproductos)
const  unproductos = localStorage.getItem("almacen")
console.log("los productos registrados son: ", unproductos);



let nombrebuscado = prompt("¿que producto estas buscando?")

let productohallado = misproductos.filter(
    (unproducto) => unproducto.nombre.includes(nombrebuscado.toUpperCase()
    ))

alert("la cantidad de producto que se hallaron en su nombre " + nombrebuscado + " son: " + productohallado.length)


let bodyy = document.getElementsByClassName("bodyindex")
console.log("el body de esta pagina es: ", bodyy);

const unproductoss = { id: 1, name: "salame", vendido: true }
const jsondeunproductoss = JSON.stringify(unproductoss)
localStorage.setItem("productoss", jsondeunproductoss)

const unproductossrecuperado = localStorage.getItem("productoss")
console.log("producto recuperado sin parsearlo", {unproductossrecuperado});


