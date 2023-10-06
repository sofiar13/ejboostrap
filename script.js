document.addEventListener("DOMContentLoaded", function () {
    // Obtén una referencia al enlace "Opciones" y al contenedor de la lista
    var opcionesEnlace = document.getElementById("opcionesEnlace");
    var opcionesLista = document.getElementById("opcionesLista");
  
    // Agrega un evento de clic al enlace "Opciones"
    opcionesEnlace.addEventListener("click", function (e) {
      e.preventDefault();
      // Alterna la visibilidad de la lista de opciones
      if (opcionesLista.style.display === "block") {
        opcionesLista.style.display = "none";
      } else {
        opcionesLista.style.display = "block";
      }
    });
  });
  