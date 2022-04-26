//janela de alerta criada em javascript
function bemvindos() {
  alert("Olá, seja bem vindo");
}

//vamos solicitar ao usiario que entre com o seu nome
//utilizaremos o promt associado a uma variavel
function nome() {
  var nome = "";
  nome = promt("Digite seu nome");
  alert(nome.toUpperCase()); //nome em letras maiusculas*/
}
function operacoes() {
  //calcular as 5 operacoes aritmeticas*/

  var numero1 = prompt("digite um numero");
  var numero2 = prompt("digite outro numero");

  var soma = parseInt(numero1) + parseInt(numero2);
  var subtrair = numero1 - numero2;
  var multiplicar = numero1 * numero2;
  var dividir = numero1 / numero2;
  var resto = numero1 % numero2;


document.getElementsByTagName("button")[0].innerHTML = 
  "os resultados são: <br><br>" +
    "soma: " +
    soma +
    "<br>subtração: " +
    subtrair +
    "<br>multiplicação: " +
    multiplicar +
    "<br>duvisão: " +
    dividir +
    "<br>resto: " +
    resto;
    
}
    
