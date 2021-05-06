const fs = require('fs');
const extenso = require('extenso');

const validarValor = (entrada1, entrada2, verdadeiro, falso) => entrada1.length < 9 && entrada2.length === 2 ? verdadeiro : falso;

const converterParaExtenso = valor => extenso(valor, { mode: 'currency', currency: { type: 'BRL' }, locale: 'br' });

const validacaoTrue = valida => `${valida} => ${converterParaExtenso(valida)} \n`;

const validacaoFalse = valida => `${(valida)} => Não possui formatação valida \n`;

const escreveArquivoTXT = (caminho, dados) => {
    try {
        const data = fs.writeFileSync(caminho, dados);
        return data;
    } catch (error) {
        console.log(error);
        return;
    }
};

const seperador = data => {
    let ler = '';
    data.split('\r\n').map(numero => {
        let valor = String(numero)
        if (!valor.includes(',') || valor.split(',').length > 2) {
            ler += validacaoFalse(valor);
        } else {
            let [antesVirgula, depoisVirgula] = valor.split(',');
            ler += validarValor(antesVirgula, depoisVirgula, validacaoTrue(valor), validacaoFalse(valor))
        }
    });
    return ler;
}

const lerArquivoTXT = caminho => {
    try {
        const data = fs.readFileSync(caminho, 'utf8');
        return data;
    } catch (error) {
        console.log(error);
        return;
    }
};

module.exports = (lerArquivo, salvarArquivo) => {
    let entradaDadostxt = lerArquivoTXT(lerArquivo);
    let dadostxt = seperador(entradaDadostxt);
    saidaDadostxt = escreveArquivoTXT(salvarArquivo, dadostxt);
    return console.log(saidaDadostxt)
};