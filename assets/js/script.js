// Insertar URL
const API = "https://pokeapi.co/api/v2/pokemon?limit=21&offset=00";
let html= "";
// consumir API
const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      getData2(json.results), paginacion(json);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};

const getData2 = (data2) => {
  html = ""
  data2.forEach((pj) => {
    fetch(pj.url)
    .then((response) => response.json())
    .then((json) => {
      dibujarData(json)
      console.log(json)
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
  });
};
// Dibujar Cards Personaje
const dibujarData = (data) => {
  console.log(data)
 
    html += '<div class="col-md-4">';
    html += '<div class="card bg-dark text-white m-2" style="width: 18rem;" >';
    html += `<img src="${data.sprites.front_default}" class="card-img-top px-5"  alt="...">`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title text-center">id = ${data.id}</h5>`;
    html += `<h2 class="card-title text-center">${data.name}</h2>`;
    html += `<h6 class="card-title text-center">Height: ${data.height} Ft.</h6>`;
    html += `<h6 class="card-title text-center">Weight: ${data.weight} Pounds</h6>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  document.getElementById("datosPj").innerHTML = html;
};

// Paginacion
const paginacion = (data) => {
  let html = "";
  html += `<li class="page-item" ${
    data.previous ? "" : "disabled"
  }"><a class="button border  rounded-pill bg-white text-decoration-none text-danger px-1" onclick="getData('${
    data.previous
  }')">Preview</a></li>`;
  html += `<li class="page-item" ${
    data.next ? "" : "disabled"
  }><a class="button border  rounded-pill bg-white text-decoration-none text-danger px-3" onclick="getData('${data.next}')">Next</a></li>`;
  document.getElementById("paginacion").innerHTML = html;
};

//ejecutar getData
getData(API);
