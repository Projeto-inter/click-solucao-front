import React, { ChangeEvent, useEffect, useState } from "react";
import "./CadastrarUser.css";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import User from "../../model/User";
import { cadastroUsuario } from "../../service/Service";

function CadastrarUsuario() {
  let navigate = useNavigate();
  const [confirmarSenha, setConfirmarSenha] = useState<String>("");
  const [user, setUser] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    foto: "",
    cpf: "",
    cnpj: "",
    dataDeNascimento: "",
    telefone: "",
    senha: "",
  });

  const [userResult, setUserResult] = useState<User>({
    id: 0,
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
    if (userResult.id != 0) {
      navigate("/login");
    }
  }, [userResult]);

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (confirmarSenha == user.senha) {
      cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
      alert("Usuario cadastrado com sucesso");
    } else {
      alert(
        "Senhas diferentes uma da da outra. Por favor, verifique se digitou corretamente."
      );
    }
  }
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className="fullfill-vh-color2"
    >
      <Grid xs={6} className="fotoFundo2"></Grid>
      <Grid xs={6} alignItems="center">
        <Box paddingX={20}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              color="textprimary"
              component="h3"
              align="center"
              style={{ fontWeight: "bold", color: "aquamarine" }}
            >
              Cadastrar
            </Typography>
            <TextField
              value={user.nome}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updatedModel(event)
              }
              id="nome"
              label="Nome"
              variant="outlined"
              name="nome"
              margin="normal"
              fullWidth
              className="corEntradas2"
            ></TextField>
            <TextField
              value={user.usuario}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updatedModel(event)
              }
              id="usuario"
              label="Usuário"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
              className="corEntradas2"
            ></TextField>
            <TextField
              value={user.cpf}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updatedModel(event)
              }
              id="cpf"
              label="CPF"
              variant="outlined"
              name="cpf"
              margin="normal"
              fullWidth
              className="corEntradas2"
            ></TextField>
            <TextField
              value={user.cnpj}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updatedModel(event)
              }
              id="cnpj"
              label="CNPJ"
              variant="outlined"
              name="cnpj"
              margin="normal"
              fullWidth
              className="corEntradas2"
            ></TextField>
            <TextField
              value={user.senha}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updatedModel(event)
              }
              id="senha"
              label="Senha"
              variant="outlined"
              name="senha"
              type="password"
              margin="normal"
              fullWidth
              className="corEntradas2"
            ></TextField>
            <TextField
              value={confirmarSenha}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                confirmarSenhaHandle(event)
              }
              id="confirmarSenha"
              label="Confirmar Senha"
              variant="outlined"
              name="confirmarSenha"
              type="password"
              margin="normal"
              fullWidth
              className="corEntradas2"
            ></TextField>
            <Box marginTop={2} textAlign="center">
              <Link to="/login">
                <Button variant="contained" className="btnCancelar">
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                variant="contained"
                className="btnCadastrar"
              >
                Cadastrar
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CadastrarUsuario;
