from num2words import num2words


def lerArquivo(path):
    arquivo = open(path, 'r')
    criaArray = []
    for linha in arquivo:
        criaArray.append(linha.replace('\n', ''))
    arquivo.close()
    return criaArray

def criaArquivo(path, arrayExtenso):
    arquivo = open(path, 'w')
    for line in arrayExtenso:
        arquivo.write(line)

def converterParaExtenso(valor):
    return num2words(valor, lang='pt_BR', to='currency')

def verificaValor(valor):  # falta verificar letras
    if len(valor.split(',')) == 2 and (valor.find(',')):
        v1, v2 = valor.split(',')
        if len(v2) == 2 & len(v1) <= 9:
            extenso = converterParaExtenso(valor.replace(',', "."))
            extenso += '\n'
            return valor+' => '+extenso

    return valor+' => Nao possui formatacao valida \n'


if __name__ == "__main__":

    ler = '\\Users\\ROBSON\\Documents\\GitHub\\arquivo.txt'
    salvar = 'salvar.txt'

    arr = lerArquivo(ler)
    arr2 = []
    for i in arr:
        arr2.append(verificaValor(i))
    criaArquivo(salvar, arr2)
