// importação do modeulo do servidor express*/

const { json } = require("express");
const express = require("express");

/*criação do app do servidor express*/ 
const app = express()

//permitir que o servidor trabalhe com o formato jSON
app.use(express.json());

/*vamos criar a primeira rota do servidor*/
//esta sera a rota raiz*/
app.get("/",(req, res) => {
    res.send("ola, seja bem vindo. voce esta na rota raiz");

});
/**definir uma porta de comunidação com servidor de aplicação */
app.listen(5000, ()=> console.log("on line em http://localhost 5000"));
 