document.title = "Pardosera - Fetch"

const tituloH1 = document.querySelector("h1");

tituloH1.innerText = "Complementario - Fetch"

const listaPost = document.querySelector("#post");

const url = "datos.json";


//Cargando productos

const cargandoProductos = async () => {
    const respuesta = await fetch(url)

    const productos = await respuesta.json()

    productos.forEach((productos) => {
        const li = document.createElement("li");
        const { id, nombre, precio, img } = productos;
        li.innerHTML = `    <h3>Producto: ${nombre.toUpperCase()}</h3>
      <img src="${img}">
      <hr>
      <p>ID: ${id}</p>
      <p>Precio: $ ${precio}</p>`;

        listaPost.append(li);
    });

}
cargandoProductos()