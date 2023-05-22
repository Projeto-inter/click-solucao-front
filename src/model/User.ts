interface User{
    id: number;
    nome: string;
    usuario: string;
    foto: string | null;
    cpf: string | null;
    cnpj: string | null;
    dataDeNascimento: string;
    telefone: string;
    senha: string;
}

export default User;