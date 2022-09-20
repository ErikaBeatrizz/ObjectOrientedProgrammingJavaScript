var Cliente = /** @class */ (function () {
    function Cliente(nome, idade, cpf, endereço) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.endereco = endereço;
    }
    Cliente.prototype.mudarEndereco = function (novoEndereco) {
        this.endereco = novoEndereco;
    };
    return Cliente;
}());
var user = new Cliente('Erika', 28, '140.123.123.12', 'Rua do Lavradio');
console.table(user);
user.mudarEndereco('Rua Eliseu Visconti');
console.table(user);
