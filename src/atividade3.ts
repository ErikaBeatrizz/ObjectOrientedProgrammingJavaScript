class Celular {
    public modelo: string;
    public ano: number;
    private memoria: number;
    public qntdCamera: number;

constructor (modelo:string, ano:number, memoria:number, qntdCamera:number){
    this.modelo = modelo;
    this.ano = ano;
    this.memoria = memoria;
    this.qntdCamera = qntdCamera;
}

public mudarModelo (novoModelo: string){
    this.modelo= novoModelo
}
}

const cel = new Celular ('Samsung', 2017, 64, 3);

console.table(cel)

cel.mudarModelo('Iphone');

console.table(cel)