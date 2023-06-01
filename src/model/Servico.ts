import Categoria from "./Categoria";
import User from "./User";

interface Servico {
  id: number;
  nome: string;
  descricao: string;
  local: string;
  foto: string;
  valor: number;
  categoria?: Categoria | null;
  usuario?: User | null;
}

export default Servico;
