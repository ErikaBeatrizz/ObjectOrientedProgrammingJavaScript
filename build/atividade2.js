var Aviao = /** @class */ (function () {
    function Aviao(modelo, tamanho, companhia) {
        this.modelo = modelo;
        this.tamanho = tamanho;
        this.companhia = companhia;
    }
    Aviao.prototype.mudarEmpresa = function (novaEmpresa) {
        this.companhia = novaEmpresa;
    };
    return Aviao;
}());
var plane = new Aviao('E777', 'Boeing', 'TAM');
console.table(plane);
plane.mudarEmpresa('GOL');
console.table(plane);
