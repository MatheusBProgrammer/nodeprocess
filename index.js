// Entrada e saida de dados no terminal; Digite "node index.js -a" que o
// resultado será true, caso não tenha o -a, o resultado será false
const executar = process
    .argv
    .indexOf('-a') != -1
//console.log(executar)
if (executar) {
    //escreve no terminal
    process
        .stdout
        .write('Teste stdout.write\n')
    //encerra o processo
    process.exit()
} else {
    process
        .stdout
        .write('Digite algo: ')
    //recebimento de dados via terminal
    process
        .stdin
        .on('data', data => {
            const string = data
                .toString()
                .replace('\n', '')

            process
                .stdout
                .write(`Oque voce digitou foi: ${string}`)

            //encerra o processo
            process.exit()
        })
}