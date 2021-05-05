const fs = require('fs')
const extenso = require('extenso')

const converterParaString = valor => extenso(valor, { mode: 'currency', currency: { type: 'BRL' }, locale: 'br' })

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    data.split('\r\n').map((numero) => {
        return console.log(`${numero} => ${converterParaString(numero)}`);
    })
    console.log(__filename)
});
