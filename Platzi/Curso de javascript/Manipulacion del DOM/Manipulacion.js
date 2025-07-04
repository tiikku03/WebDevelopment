//Agregar elementos HTML sin remplazar contenido existente
//elemento


//Crear elemetos con CreateElement()
const newElement = document.createElement("p")// creando una etiqueta de parrafo
const contenedorDelElementoNuevo = document.getElementById("elemento")
newElement.innerHTML = "fui creado usando document.createElemet()"
elemetoDondeSeVaAAgregar.createElemetn("p") 

contenedorDelElementoNuevo.append(newElement)

/* para inyectar los elementos en una posicion especifica: 


.prepend
.before
.after

*/

contenedorDelElementoNuevo.prepend(newElement)
contenedorDelElementoNuevo.before(newElement)
contenedorDelElementoNuevo.after(newElement)