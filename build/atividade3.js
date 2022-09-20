var Celular = /** @class */ (function () {
    function Celular(modelo, ano, memoria, qntdCamera) {
        this.modelo = modelo;
        this.ano = ano;
        this.memoria = memoria;
        this.qntdCamera = qntdCamera;
    }
    Celular.prototype.mudarModelo = function (novoModelo) {
        this.modelo = novoModelo;
    };
    return Celular;
}());
var cel = new Celular('Samsung', 2017, 64, 3);
console.table(cel);
cel.mudarModelo('Iphone');
console.table(cel);
