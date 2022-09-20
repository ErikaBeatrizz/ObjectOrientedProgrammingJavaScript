class Funcionario {
    public profissao: string;
    public cargo: string;
    public salario: number;

constructor (profissao:string, cargo: string, salario:number) {
    this.profissao = profissao;
    this.cargo = cargo;
    this.salario = salario;
}

public mudarCargo (novoCargo: string){
    this.cargo = novoCargo
}

public mudarSalario (novoSalario: number){
    this.salario = novoSalario
}

}

const funcionario = new Funcionario ('Designer', 'Junior', 1500);

console.table (funcionario);   

funcionario.mudarCargo('Analista');
funcionario.mudarSalario(3000);

console.table(funcionario);


