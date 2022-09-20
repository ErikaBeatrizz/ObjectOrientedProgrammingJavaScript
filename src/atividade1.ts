class Cliente {
    public nome: string;
    public idade: number;
    private cpf: string;
    private endereco: string;

constructor (nome: string, idade:number, cpf: string, endereço: string){
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
    this.endereco = endereço;
}

public mudarEndereco (novoEndereco: string){
    this.endereco= novoEndereco;
}

}


const user = new Cliente ('Erika', 28, '140.123.123.12', 'Rua do Lavradio');

console.table(user)

user.mudarEndereco('Rua Eliseu Visconti'); 

console.table(user)



