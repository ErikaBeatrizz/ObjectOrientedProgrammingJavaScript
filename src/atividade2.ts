class Aviao {
    public modelo: string;
    public tamanho: string;
    public companhia: string;

constructor (modelo:string, tamanho:string, companhia:string){
        this.modelo = modelo;
        this.tamanho = tamanho;
        this.companhia = companhia;
}

public mudarEmpresa (novaEmpresa: string){
    this.companhia= novaEmpresa;
}

}

const plane = new Aviao ('E777', 'Boeing', 'TAM');

console.table(plane)

plane.mudarEmpresa('GOL');

console.table(plane)

