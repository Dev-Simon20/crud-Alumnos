const boton = document.querySelector(".boton");
const body = document.querySelector("body");
const conten = document.querySelector(".conten-body");


boton.addEventListener("click", (event) => {
  event.preventDefault();
  const nombre = document.getElementById("name").value;
  const apellido = document.getElementById("lastName").value;
  const codigo = document.getElementById("code").value;
  if (nombre=="") {
    console.log("Error no hay contenido");
  }
  else{
    let agregacion = { nombre:nombre, apellido:apellido, codigo:codigo };
  let agregacionJson = JSON.stringify(agregacion);
  console.log(agregacionJson);
  fetch("http://localhost:3000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: agregacionJson,
  });
  conten.innerHTML="";
  fetch("http://localhost:3000/")
  .then((response) => response.json())
  .then((data) => llenar(data));
   nombre.value="";
   apellido="";
   codigo="";
  }
});


fetch("http://localhost:3000/")
  .then((response) => response.json())
  .then((data) => llenar(data));


  const llenar = (datos) => {
  div = document.createElement("div");
  div.classList.add("Agregados");

  for (let i = 0; i < datos.length; i++) {
    div = document.createElement("div");
    div.classList.add("agregados");
    be = document.createElement("p");
    be.addEventListener("click",(event)=>eliminar(event));
    be.classList.add("trash");
    be.textContent = "Eliminar";
   
    p = `<p>${datos[i].nombre}</p>
            <p>${datos[i].apellido}</p>
            <p>${datos[i].codigo}</p>`;

    div.innerHTML = p;
    div.appendChild(be);

    conten.appendChild(div);
  }
   };

   const eliminar=(event)=>{
    let evento=event.target.parentElement.outerHTML;
    let resul=evento.split(/<|>/);
    console.log(resul[4]);
    fetch(`http://localhost:3000/${resul[4]}`, {
    method: "DELETE",
    });
    let removerEle=event.target.parentElement
    conten.removeChild(removerEle);  
   }
   