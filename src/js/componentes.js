 /*para poder utilizar la funcion luego de la instalacion de npm init
 debemos no solo usar import en el archivo donde se invoca la funcion sino tambien
 usar la palabra export a los elementos que se usaran en donde se importen


//COMANDO PARA INICIAR PROYECTO E INSTALAR MODULOS
 https://webpack.js.org/guides/getting-started/
    mkdir webpack-demo
    cd webpack-demo
    npm init -y 
    npm install webpack webpack-cli --save-dev

 Posteriormente se corre nuevamente npm run build
 */

// el Web pack solo puede importar o exportar archivos css pero veremos como poder usar estilos ..incluyendo css en las reglas del webpack.config.js
 import '../css/componentes.css';
 import webpacklogo from '../assets/img/webpack-logo.png';
 
 export const saludar = (nombre)=>{
    console.log('Creando Etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre}!`;

    document.body.append(h1);

    //imagen--se importo
    console.log(webpacklogo);
    const img = document.createElement('img');
    img.src = webpacklogo;
    document.body.append(img);

}
