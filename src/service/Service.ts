import axios from "axios";

export const api = axios.create({
  baseURL: "https://clicksolucao.onrender.com/",
});

export const cadastroUsuario = async (url: any, dados: any, setDados: any) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};
