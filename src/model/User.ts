import Servico from "./Servico";


interface User{
    id: number;
    nome: string;
    usuario: string;
    foto: string;
    cpf: string | null;
    cnpj: string | null;
    dataDeNascimento: string;
    telefone: string;
    senha: string;
    servico?: Servico[] | null;
}

export default User;