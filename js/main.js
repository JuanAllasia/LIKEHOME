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

const formProducto = document.getElementById("formulario-producto");
formProducto.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const unproducto = new Producto(nombre, precio);
    misproductos.push(unproducto);
    console.log("la cantidad de productos que hay en mi lista ", misproductos.length);
    localStorage.setItem("almacen", JSON.stringify(misproductos));
    console.log("los productos registrados son: ", localStorage.getItem("almacen"));
    formProducto.reset();
});


