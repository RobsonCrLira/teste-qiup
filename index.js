const fs = require('fs')
const extenso = require('extenso')

const converterParaString = valor => extenso(valor, { mode: 'currency', currency: { type: 'BRL' }, locale: 'br' })

const escreveArquivoTXT = (nome, data) => fs.writeFile(
    nome, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    }
);

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    let writeFileArquivo = '';
    data.split('\r\n').map((numero) => {
        return writeFileArquivo += `${numero} => ${converterParaString(numero)} \n`;
    });
    escreveArquivoTXT('extenso.txt', writeFileArquivo)
});
