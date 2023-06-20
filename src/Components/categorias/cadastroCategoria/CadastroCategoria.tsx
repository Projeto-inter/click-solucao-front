/* eslint-disable prefer-const */
import React, { useState, useEffect, ChangeEvent } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import Categoria from "../../../model/Categoria";
import { buscaId, post, put } from "../../../service/Service";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import { Box } from "@mui/material";

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
      toast.error("Usuário precisa estar logado!", {
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
      toast.success("Categoria cadastrada com sucesso!", {
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
      post(`/categorias`, categoria, setCategoria, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("🦄 Wow so easy!", {
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
    navigate("/categorias");
  }

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography variant="h5" align="center" style={{textTransform: "uppercase", fontWeight: "700", color: "#29274c"}}>
          {id !== undefined ? " Atualização " : " Cadastro "}
          de Categoria
        </Typography>
        <TextField
          value={categoria.descricao}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)}
          id="descricao"
          label="Descrição"
          variant="outlined"
          name="descricao"
          margin="normal"
          fullWidth
        />
        <Box display="flex" justifyContent="center">
        <Button type="submit" variant="contained" style={{
          backgroundColor: "#FDD392", color: "#bf7f1d"
        }} >
          Finalizar
        </Button>
        </Box>
      </form>
    </Container>
  );
}

export default CadastroCategoria;
