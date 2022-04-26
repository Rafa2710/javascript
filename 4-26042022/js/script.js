function verificarCPF(){
    var cpfusuario = document.getElementById ("cpf").value;
    /*o comando substring permite "quebrar" uma string em caracter assim voce consegue pegar a quantidade de caracteres 
    qeu quiser, no caso abaixo estamos pegando o primeiro caracteres (posicao0)
    ate o nono caracteres. temos, entao os 9 primeiros numeros do cpf*/
    var cpfCalc = cpfusuario.substring(0,9);
    console.log(cpfCalc);
    var peso10 = 10;
    var peso11 = 11;
    var resultado = 0;
    var resto = 0;
    for(var i = 0; i < 9 ; i++){
    resultado += cpfCalc[i]* peso10;
    peso10--;
}
console.log(resultado);
resto = resultado % 11;

if(resto < 2){
    cpfCalc+=0;
}
else{
    cpfCalc+=(11-resto)
}

console.log(cpfCalc);

//*vamos zerar a variavel resultado;
resultado = 0;

for(var i = 0 ; i < 10 ; i ++){
    resultado += cpfCalc[i]* peso10;
    peso11--;
}

resto = resultado % 11;
if (resto < 2) {
    cpfCalc += 0;
}else{
    cpfCalc +=11 - resto
}
if(cpfCalc != cpfusuario) {
    alert ("cpf incorreto!");
}
}

