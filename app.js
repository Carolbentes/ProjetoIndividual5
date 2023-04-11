import chalk from 'chalk'
import readLineSync from 'readline-sync'

const propriedades = []
let input = ''

while (input != 'sair') {
    propriedades.push(input);
    input = readLineSync.question(chalk.green('Digite uma propriedade CSS, ou SAIR: '));
}

console.log(chalk.bold(`Lista de Propriedades CSS ordenadas:`), (chalk.redBright(propriedades.sort().join('\n'))));