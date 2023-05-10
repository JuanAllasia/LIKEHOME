localStorage.setItem("saludo", "bienvenido a likehome")
const saludar = localStorage.getItem("saludo")
console.log("", saludar);


const form = document.getElementById("formulario");

form.addEventListener("submit", (event) => {
    event.preventDefault(); 

  const nombre = document.getElementById("nombre").value;
  const contraseña = document.getElementById("contraseña").value;
  const fecha_nacimiento = document.getElementById("fecha_nacimiento").value;


  sessionStorage.setItem("nombre", nombre);
  sessionStorage.setItem("contraseña", contraseña);
  sessionStorage.setItem("fecha_nacimiento", fecha_nacimiento);

  window.location.href = "bienvenida.html"
});
