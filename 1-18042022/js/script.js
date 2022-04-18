//janela de alerta criada em javascript
//alert("Olá, seja bem vindo");
//vamos solicitar ao usiario que entre com o seu nome
//utilizaremos o promt associado a uma variavel
/*var nome ="";
nome = promt ("Digite seu nome");
alert(nome.toUpperCase()); //nome em letras maiusculas*/

//calcular as 5 operacoes aritmeticas*/

var numero1 = prompt ("digite um numero");
var numero2 = prompt ("digite outro numero")

var soma = parseInt(numero1) + parseInt (numero2);
var subtrair = numero1 - numero2;
var multiplicar = numero1 * numero2;
var dividir = numero1 / numero2;
var resto = numero1 % numero2;

console.log(
     "os resultados são: \n\n"+
     "soma: "+soma+
     "\nsubtração: "+subtrair+
     "\nmultiplicação: "+multiplicar+
     "\nduvisão: "+dividir+
     "\nresto: "+resto
);

