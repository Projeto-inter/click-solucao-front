import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { Box, Link } from "@mui/material";
import "./Home.css";
import TabServicos from "../../Components/servicos/tabServicos/TabServicos";
import ModalServico from "../../Components/servicos/modalServico/ModalServico";

function Home() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ backgroundColor: "#3F51B5" }}
    >
      <Grid alignItems="center" item xs={6}>
        <Box paddingX={20}>
          <Typography
            variant="h3"
            gutterBottom
            color="textPrimary"
            component="h3"
            align="center"
            style={{ color: "white", fontWeight: "bold" }}
          >
            Seja bem vindo(a)!
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            color="textPrimary"
            component="h5"
            align="center"
            style={{ color: "white", fontWeight: "bold" }}
          >
            Ache aqui seu profissional!
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Box marginRight={1}>{<ModalServico />}</Box>
          <Link to='/servicos'>
            <Button
            variant="outlined"
            style={{
              borderColor: "white",
              backgroundColor: "#3F51B5",
              color: "white",
            }}
          >
            Ver Serviços
          </Button>
          </Link>
          
        </Box>
      </Grid>
      <Grid item xs={6}>
        <img
          src="https://img.freepik.com/fotos-premium/gato-fofo-de-olhos-grandes-gatinho-gato-fofo-fofo_303714-151.jpg"
          alt=""
          width="428px"
          height="625px"
        />
      </Grid>
      <Grid xs={12} style={{ backgroundColor: "white" }}></Grid>
      {<TabServicos />}
    </Grid>
  );
}
export default Home