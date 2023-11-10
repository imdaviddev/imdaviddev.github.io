import { productos } from "../../data/productos.js";

export function buscarProductoPalabrasClaves(palabrasClavesIngresadas){
    console.log("palabras: " + palabrasClavesIngresadas);

    let palabrasClaves = palabrasClavesIngresadas.toLowerCase();
    let productosEncontrados = []

    productos.forEach((producto) => {
        if(tieneConicidencias(palabrasClaves, producto)){
            productosEncontrados.push(producto)
        }
    })

    // SI NO ENCONTRO NADA, RECURRO A BUSCAR POR APROXIMACION
    if(productosEncontrados.length == 0){
        productos.forEach((producto) => {
            if(tieneAlgunaCoincidencia(palabrasClaves, producto)){
                productosEncontrados.push(producto);
            }   
        })
    }    

    return productosEncontrados;
}
function tieneConicidencias(palabrasClaves, producto){
    let titulo = producto.titulo.toLowerCase();
    let descripcion = producto.descripcion.toLowerCase();
    
    return encontrarCoicidencia(palabrasClaves, titulo) || encontrarCoicidencia(palabrasClaves, descripcion);
}
function encontrarCoicidencia(palabra, texto){
    let palabraAenContrar = new RegExp(`\\b${palabra}\\b`, 'i');
    return texto.match(palabraAenContrar);
}

function tieneAlgunaCoincidencia(palabrasClaves, producto){
    let titulo = producto.titulo.toLowerCase();
    let descripcion = producto.descripcion.toLowerCase();

    return titulo.includes(palabrasClaves) || descripcion.includes(palabrasClaves);
}

export function buscarProductoPorCategorias(categoriasPedidas){
    let productosEncontrados = [];

    productos.forEach((producto) => {
        if(tieneLaCategoria(categoriasPedidas, producto)){
            productosEncontrados.push(producto)
        }
    })

    return productosEncontrados;
}
function tieneLaCategoria(categorias, producto){
    
    categorias.forEach((cat) => {
        producto.categorias.forEach((cat2) => {
            if(cat == cat2){
                return true;
            }
        })
    })

    return false;
}
export function buscarProducto(palabrasClavesIngresadas, categoriasPedidas){
    let palabrasClaves = palabrasClavesINgresadas.toLowerCase().splice(" ");
    let productosEncontrados = []

    productos.forEach((producto) => {
        if(tieneConicidencias(palabrasClaves, producto) || 
            tieneLaCategoria(categoriasPedidas, producto)){
                productosEncontrados.push(producto);
        }
    })
}