document.addEventListener("DOMContentLoaded", () => {
    const correo = document.getElementById("correo");
    const edad = document.getElementById("edad");
    const btnEnviar = document.getElementById("btnEnviar");
    const formulario = document.getElementById("formularioCliente");
    const tarjetas = document.getElementById("tarjetasClientes");

    correo.addEventListener("input", () => {
        btnEnviar.disabled = correo.value === "";
    });

    edad.addEventListener("input", () => {
        if (edad.value < 0) {
            alert("La edad no puede ser negativa.");
            edad.value = "";
        }
    });

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombres").value;
        const apellido = document.getElementById("apellidos").value;
        const correoVal = correo.value;
        const edadVal = edad.value;

        const card = document.createElement("div");
        card.className = "col-md-4 mb-3";
        card.innerHTML = `
      <div class="card cliente">
        <div class="card-body">
          <h5 class="card-title">${nombre} ${apellido}</h5>
          <p class="card-text">Correo: ${correoVal}</p>
          <p class="card-text">Edad: ${edadVal}</p>
        </div>
      </div>
    `;
        tarjetas.appendChild(card);
        formulario.reset();
        btnEnviar.disabled = true;
    });
});
