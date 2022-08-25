/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona["nombre"] = prompt(`Por favor ingresa tu nombre: `);
  datosPersona["edad"] = prompt(`Por favor ingresa tu año de nacimiento: `);
  datosPersona["ciudad"] = prompt(`Por favor ingresa la ciudad donde vives: `);
  datosPersona["interesPorJs"] = confirm(`¿Te gusta JavaScript?: `);
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const nombre = document.getElementById("nombre");
  const edad = document.getElementById("edad");
  const ciudad = document.getElementById("ciudad");
  const javascript = document.getElementById("javascript");

  nombre.innerHTML = datosPersona["nombre"];
  edad.innerHTML = Number(2022 - datosPersona["edad"]);
  ciudad.innerHTML = datosPersona["ciudad"];
  javascript.innerHTML = datosPersona["javascript"] ? "Si" : "No";
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const fila = document.getElementById("fila");
  const generarCaja = (item) => {
    return `
      <div class="caja">
        <img src="${item.imgUrl}" alt="${item.lenguajes}">
        <p class="lenguajes">${item.lenguajes}</p>
        <p class="bimestre">${item.bimestre}</p>
      </div>
    `;
  };
  listado.forEach((item) => {
    fila.innerHTML += generarCaja(item);
  });
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const sitio = document.getElementById("sitio");
  sitio.setAttribute("class", "dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
window.addEventListener("keydown", (e) => {
  const sobreMi = document.getElementById("sobre-mi");
  if (e.key == "f") {
    sobreMi.classList.remove("oculto");
  }
});
