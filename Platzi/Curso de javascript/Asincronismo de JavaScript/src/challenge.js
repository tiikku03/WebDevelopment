/* ----------------------XML HTTP REQUEST------------------------------

1) llamado de productos.
2) acceder a un producto en particular.


*/

const XMLHttpRequest = require("xmlhttprequest");
const API = 'https://api.escuelajs.co/api/v1';




function fetchData(url_api, callback/* los datos que estamos recibiendo */) {
    const xhr = new XMLHttpRequest();/* es una referencia a XMLHttpReauest*/
    xhr.open('GET', url_api, true); /*Trabajar con los elementos que entrega la API, (Tipo de peticion, url que va a usar, elvalor para habilitarlo)*/
    xhr.onreadystatechange = () => {/* una funcion la cual recibe un evento*/
        if (xhr.readyState === 4) {/* dentro de los ready state, 0 = no se ha inicializado, 
                                                                1 = loading, 2 = ya se ejecuto el valor de sent, 
                                                                3 = interactuando con la solicitud, 
                                                                4 = finalizado*/
            if (xhr.status === 200) {/*hay que validar el status, 200 = la solicidud es correcta */
                callback(null, JSON.parse(xhr.responseText));
            } 
        }else {
                const error = new Error(`Error ${url_api}`);
                return callback(error, null);
            }
    };
    xhr.send();
}




