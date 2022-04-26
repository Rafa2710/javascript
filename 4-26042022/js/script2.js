function array1 (){
    var nomes = ["paulo", "helena", "Vanessa"];
    console.log(nomes[0]);  
    for(var i=1; i<nomes.length ; i++) {
        console.log(nomes[i]);

    }
/*  vamos adicionar um nome */
nomes.push("rafael");
console.log(nomes);
/* remover o ultimo elemnto array*/
nomes.pop();
console.log(nomes);
//remover o pirmeiro elemento do array*/
nomes.shift();
console.log(nomes);
/*adiconar o primeiro elemento do array*/
nomes.unshift("wganer");
nomes.push("gabriela");
console.log(nomes); 
/*vamos criar uma matriz com nome e idade*/
var dados = [
        ["nome", "idade"],
        ["pedro", "15"],
        ["marcos", "21"],
        ["deborah", "22"],
];
console.log(dados);
}