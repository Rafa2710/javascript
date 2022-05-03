// importação do modeulo do servidor express*/

const express = require("express");

//*importação do modulo do mongoose*/
const mongoose = require("mongoose");

/*criação do app do servidor express*/ 
const app = express()

//permitir que o servidor trabalhe com o formato jSON
app.use(express.json());

/*URl de conexao com o banco de dados mongodb
mongodb+srv://Regiane:<password>@projetosenac.w5z4p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority*/
const urldb = "mongodb+srv://Regiane:santander@projetosenac.w5z4p.mongodb.net/bancodados?retryWrites=true&w=majority"
mongoose.connect(urldb,{useNewUrlParser:true, useUnifiedTopology:true});

/**
 criar as estruturas da tabela para cadastro dos clientes
 */
const tabela = mongoose.Schema({
    nome: String,
    email:String,
    idade:Number,

});
/*criar um modelo de dados, ou seja criar a tabela com a estrutura*/

const clientes = mongoose.model("tbcliente", tabela);

/*vamos criar a primeira rota do servidor*/
//esta sera a rota raiz*/
app.get("/",(req, res) => {
    

    /**vamos trazer todos os clientes cadastrados e exibir em tela  */
    clientes.find((erro,dados) =>{
        if(erro)return res.status(500).send({output:`erro ao carregar cliente -> ${erro}`});
        res.status(200).send({output:dados});
    })

});
/*vamos criar a rota com o verbo post. é usado quando se deseja cadastrar algum dado ou para fazer sistema de login*/
app.post("/cadastro",(req,res)=>{
    /**
     vamos criar um novo cliente a partir dos dados enviados
     */
    const cli = new clientes (req.body);

    /* comando SAVE para gravar os dados no banco de dados*/
    cli.save().then((dados) => {
        res.status(201).send({output:`cliente cadastrado`, info:dados});
    })
    .catch((erro) =>res.status(500).send({output:`erro ao cadastrar->${erro}`}));
})


/**definir uma porta de comunidação com servidor de aplicação */
app.listen(5000, ()=> console.log("on line em http://localhost 5000"))
    
/*rota para atualizar os dados dos clientes. vamos usar o verbo PUT
para atualizar precisaremos de 2 informaçoes. a primeira é o id do dado que voce deseja atualizar 
e a segunda, sao os dados qeu deseja atualizar. */

app.put("/atualizar/:id",(req,res)=>{
    clientes.findByIdAndUpdate(req,params.id,body,{new:true},(erro,dados)=>{
        if(erro)return res.status(400).send({output:`erro ao autalizar-> ${erro}`});
        res.status(200).send({output:`autalizado`, info:dados});

    });
});
/*para deletar um dado iremos usar o verbo DELETE passando o id do */
app.delete("/apagar/:id",(req,res)=>{
    res.status(204).send({output: `Apagou`});
});



 