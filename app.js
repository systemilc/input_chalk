/*    

Readme: importar bibliotercas input e chalk para funcionar corretamente:

*/
import input from "input";
import chalk from "chalk";

async function entradaUsuario() {

    let propriedades = [];
    let entrada;

    do
    {
        entrada ? propriedades.push(entrada) : "";

        entrada = (await input.text(`Informe uma propriedade CSS: | Para finalizar escreva fim \n`)).toLowerCase();

    }
    while (entrada != "fim");

    propriedades = propriedades.sort();

    for(let i=0;i < propriedades.length; i++){
        console.log(chalk.blue(`Propriedades CSS: ${propriedades[i]}`));
    }
}

entradaUsuario();