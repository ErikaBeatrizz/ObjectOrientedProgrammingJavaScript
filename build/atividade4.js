var Funcionario = /** @class */ (function () {
    function Funcionario(profissao, cargo, salario) {
        this.profissao = profissao;
        this.cargo = cargo;
        this.salario = salario;
    }
    Funcionario.prototype.mudarCargo = function (novoCargo) {
        this.cargo = novoCargo;
    };
    Funcionario.prototype.mudarSalario = function (novoSalario) {
        this.salario = novoSalario;
    };
    return Funcionario;
}());
var funcionario = new Funcionario('Designer', 'Junior', 1500);
console.table(funcionario);
funcionario.mudarCargo('Analista');
funcionario.mudarSalario(3000);
console.table(funcionario);
