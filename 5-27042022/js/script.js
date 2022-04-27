/*
função anonima é uma função que nao tem nome ela é atribuida a um elemento
de evento ou a uma variavel. os elementos de evento podem ser: botoes, inputs,
imagens e varios outros controles html.	
*/
const body = document.body;
/*vamos criar um botão para adicionar a pagina */
const btn1 = document.createElement('button');  
btn1.innerHTML="primeira função";
//* adicionar o btn1 a pagina html. adição feita ao body*/
body.appendChild(btn1);
/**aplicar uma função ao botão btn1 */
btn1.onclick=function(){
    /**capturar a url da pagina  */
    var url = window.location;
    window.document.title="trocou o titulo";
    alert("trocamos o titulo da pagina " +url);
};
//*criar um novo notão btn2*/
const btn2 = document.createElement('button');  
btn2.innerHTML = "segunda função";

/*adiconar btn2 ao body*/
body.appendChild(btn2);
btn2.onclick = ()=> {
    document.body.style.backgroundColor = "red";
};

/**vamos criar uma matriz com produtos */
const produtos =[
    ["produto", "quantidade", "preço"],
    ["calça","15", "R$ 150,00"],
    ["blusa", "35", "R$ 35,00"],
    ["Tenis", "10", "R$ 200,00"],
];

function montarTabela () {
    const div = document.createElement("div");
    var tabela = "<table>";

    for(var linha = 0; linha <= 3 ; linha ++ ) {
        tabela += "<tr>";

        for(var coluna = 0 ; coluna <= 2 ; coluna ++) {      
             if(linha==0){
                tabela +=`<th>${produtos[linha][coluna]}</th>`;
             } else {
                 tabela += `<td>${produtos[linha][coluna]}</td>`;
             }          
        }
        tabela += "</tr>";
    }
    tabela +="</table";
    div.innerHTML = tabela;
    body.appendChild(div);
}
    const btn3  = document.createElement("button");
    btn3.innerHTML = "terceira função";
    body.appendChild(btn3);
    btn3.onclick = montarTabela;

    const btn4 = document.createElement("button");
    btn4.innerHTML = "Quarta função";
    btn4.onclick = () =>{

        //*vamos usar um iterador chamado foreach (para cada)
        /*ele ta presente no array*/
        produtos.forEach(function(produto,index){


            console.log(`item da linha ${index}->${produto}`);

    });

};
body.appendChild(btn4);
const btn5 = document.createElement("button");
btn5.innerHTML = "quinta função";
btn5.onclick = ()=>{
    produtos.forEach((produto,index)=>{
            produto.forEach((item,ix)=>{
                console.log(`linha ${index} e coluna ${ix} -> ${item}`);

        
    });
});
};
body.appendChild(btn5);
 

