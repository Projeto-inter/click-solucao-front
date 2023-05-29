import React, { useState, useEffect, ChangeEvent } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import Categoria from "../../../model/Categoria";
import { buscaId, post, put } from "../../../service/Service";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function CadastroCategoria() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    descricao: "",
  });

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    buscaId(`/categorias/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (id !== undefined) {
      put(`/categorias`, categoria, setCategoria, {
        headers: {
          Authorization: token,
        },
      });
      alert("Categoria atualizada com sucesso");
    } else {
      post(`/categorias`, categoria, setCategoria, {
        headers: {
          Authorization: token,
        },
      });
      alert("Categoria cadastrada com sucesso");
    }
    back();
  }

  function back() {
    navigate("/categorias");
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
          Cadastrar categoria
        </Typography>
        <TextField
          value={categoria.descricao}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)}
          id="descricao"
          label="descricao"
          variant="outlined"
          name="descricao"
          margin="normal"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Finalizar
        </Button>
      </form>
    </Container>
  );
}

export default CadastroCategoria;
