class produto{
    constructor(nome,descriçao, preco){
        this.nome = nome;
        this.descriçao = descriçao;
        this.preco = preco;
    }
    }
    function cadastro(produto) {
        console.log(`cadastramos o produto ${produto.nome}`);
        console.log(`O preço desse produto é R$ ${produto.preco}`);
    }
    module.exports = {produto, cadastro };
