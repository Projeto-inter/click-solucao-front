import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import "./CadastrarServico.css";
import { useNavigate, useParams } from "react-router-dom";
import { busca, buscaId, post, put } from "../../../service/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import User from "../../../model/User";
import Servico from "../../../model/Servico";
import Categoria from "../../../model/Categoria";
import { toast } from "react-toastify";

function CadastroServico() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  //buscar token dentro do redux
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  //buscar id dentro do redux
  const userId = useSelector<TokenState, TokenState["id"]>((state) => state.id);

  useEffect(() => {
    if (token == "") {
      toast.success('Usuário precisa estar logado!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      navigate("/login");
    }
  }, [token]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    descricao: "",
  });
  const [servico, setServico] = useState<Servico>({
    id: 0,
    nome: "",
    descricao: "",
    local: "",
    foto: "",
    valor: 0,
    categoria: null,
    usuario: null,
    //add para inserir o usuário dono da postagem
  });
  const [usuario, setUsuario] = useState<User>({
    id: +userId,
    nome: "",
    usuario: "",
    foto: "",
    cpf: "",
    cnpj: "",
    dataDeNascimento: "",
    telefone: "",
    senha: "",
  });

  useEffect(() => {
    setServico({
      ...servico,
      categoria: categoria,
      usuario: usuario,
      // add user dentro de post q está sendo enviado ao back
    });
  }, [categoria]);

  useEffect(() => {
    getCategorias();
    if (id !== undefined) {
      findByIdServico(id);
    }
  }, [id]);

  async function getCategorias() {
    await busca("/categorias", setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function findByIdServico(id: string) {
    await buscaId(`/servico/${id}`, setServico, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedServico(e: ChangeEvent<HTMLInputElement>) {
    setServico({
      ...servico,
      [e.target.name]: e.target.value,
      categoria: categoria,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      put(`/servico`, servico, setServico, {
        headers: {
          Authorization: token,
        },
      });
      toast.success('Serviço cadastrado com sucesso!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    } else {
      post(`/servico`, servico, setServico, {
        headers: {
          Authorization: token,
        },
      });
      toast.success('🦄 Wow so easy!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
    back();
  }

  function back() {
    navigate("/servicos");
  }

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography
          variant="h3"
          color="textSecondary"
          component="h1"
          align="center"
        >
          Cadastrar serviço
        </Typography>
        <TextField
          value={servico.nome}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedServico(e)}
          id="nome"
          label="Nome"
          variant="outlined"
          name="nome"
          margin="normal"
          fullWidth
        />
        <TextField
          value={servico.descricao}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedServico(e)}
          id="descricao"
          label="Descrição"
          name="descricao"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          value={servico.local}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedServico(e)}
          id="local"
          label="Local"
          name="local"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          value={servico.valor}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedServico(e)}
          id="valor"
          label="Valor"
          name="valor"
          variant="outlined"
          margin="normal"
          type='number'
          fullWidth
        />
        <FormControl>
          <InputLabel id="demo-simple-select-helper-label">
            Categoria
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={(e) =>
              buscaId(`/categorias/${e.target.value}`, setCategoria, {
                headers: {
                  Authorization: token,
                },
              })
            }
          >
            {categorias.map((categoria) => (
              <MenuItem value={categoria.id}>{categoria.descricao}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Escolha uma categoria para o serviço</FormHelperText>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={categoria.id === 0}
          >
            Finalizar
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}
export default CadastroServico;
