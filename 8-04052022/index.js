const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.use(cors());

/* cors permite aceitar acessos por ptotocolos diferentes, tais como: 
http
https
ftp
smb e outros
*/
app.use(cors());

const urldb =
  "mongodb+srv://Regiane:santander@projetosenac.w5z4p.mongodb.net/bancodados?retryWrites=true&w=majority";
mongoose.connect(urldb, { useNewUrlParser: true, useUnifiedTopology: true });

const tabela = mongoose.Schema({
  nome: String,
  descrição: String,
  categoria: String,
  quantidade: Number,
  preco: Number,
  foto: String,
});

const Produto = mongoose.model("tbproduto", tabela);

/**rota padrão para a API */
const rota = "/api/produto";
app.get(`${rota}/listar`, (req, res) => {
  Produto.find((erro, dados) => {
    if (erro)
      return res
        .status(500)
        .send({ output: `erro ao carregar Produto -> ${erro}` });
    res.status(200).send({ output: dados });
  });
});

app.post(`${rota}/cadastrar`, (req, res) => {
  const pro = new Produto(req.body);

  /* comando SAVE para gravar os dados no banco de dados*/
  pro
    .save()
    .then((dados) => {
      res.status(201).send({ output: `Produto cadastrado`, info: dados });
    })
    .catch((erro) =>
      res.status(500).send({ output: `erro ao cadastrar->${erro}` })
    );
});
app.put(`${rota}/atualizar/:id`, (req, res) => {
  Produto.findByIdAndUpdate(
    req,
    params.id,
    req.body,
    { new: true },
    (erro, dados) => {
      if (erro)
        return res.status(400).send({ output: `erro ao autalizar-> ${erro}` });
      res.status(200).send({ output: `autalizado`, info: dados });
    }
  );
});

app.delete(`${rota}/apagar/id`, (req, res) => {
  Produto.findByIdAndDelete(req.params.id, (erro, dados) => {
    if (erro)
      return res.status(500).send({ output: `erro ao apagar-> ${erro}` });
    res.status(204).send({ output: "Apagou" });
  });
});

app.listen(5000, () => console.log("on line em http://localhost:5000"));
