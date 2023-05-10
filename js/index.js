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


});



function checkEdad() {
  var fechaNacimiento = document.getElementById("fecha_nacimiento").value;
  var fechaActual = new Date();
  var fechaNacimientoDate = new Date(fechaNacimiento);
  var edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
  var mes = fechaActual.getMonth() - fechaNacimientoDate.getMonth();
  if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNacimientoDate.getDate())) {
    edad--;
  }
  if (edad < 18) {
    document.getElementById("resultado").innerHTML = "Lo siento, debes ser mayor de 18 años para acceder a esta página.";
  } else {
    window.location.href = "bienvenida.html";
  }
}