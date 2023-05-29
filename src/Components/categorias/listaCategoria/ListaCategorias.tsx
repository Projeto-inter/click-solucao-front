import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { Box } from "@mui/material";
import "./ListaCategorias.css";
import Categoria from "../../../model/Categoria";
import { useNavigate } from "react-router-dom";
import { busca } from "../../../service/Service";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/action";

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const dispatch = useDispatch();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();

  async function getCategorias() {
    try {
      await busca("/categorias", setCategorias, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("O seu token expirou, logue novamente");
        dispatch(addToken(""));
        navigate("/login");
      }
    }
  }

  useEffect(() => {
    getCategorias();
  }, []);

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, []);

  return (
    <>
      {categorias.map((categoria) => (
        <Box m={2}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Categoria
              </Typography>
              <Typography variant="h5" component="h2">
                {categoria.descricao}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link
                  to={`/formCategorias/${categoria.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      className="marginLeft"
                      size="small"
                      color="primary"
                    >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link
                  to={`/deleteCategorias/${categoria.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button variant="contained" size="small" color="secondary">
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default ListaCategorias;
