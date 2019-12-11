const fs = require('fs');
const colors = require('colors');

listarTabla = (base, limite = 10) => {

    console.log('============='.green);
    console.log(`Tabla de ${base}`.green);
    console.log('============='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${i} * ${base} = ${ i * base}`);
    }
}

crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let contenido = '';

        for (let i = 1; i <= limite; i++) {
            contenido += `${ base } * ${ i } = ${ base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${limite}.txt`, contenido, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`.green)

        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}