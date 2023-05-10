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


// Check if there is stored data
if (localStorage.getItem("almacen")) {
    // Retrieve the data and parse it from JSON to JavaScript object
    const storedData = JSON.parse(localStorage.getItem("almacen"));
    
    // Loop through the retrieved data and create Producto instances for each one
    storedData.forEach((producto) => {
      const unproducto = new Producto(producto.nombre, producto.precio);
      unproducto.vendido = producto.vendido;
      
      // Add the Producto instance to the misproductos array
      misproductos.push(unproducto);
    });
    
    // Display the retrieved data on the page
    const listaProductos = document.getElementById("lista-productos");
    misproductos.forEach((producto) => {
      const li = document.createElement("li");
      li.textContent = producto.toString();
      listaProductos.appendChild(li);
    });
  }