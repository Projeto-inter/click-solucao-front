import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Home.css";
import TabServicos from "../../Components/servicos/tabServicos/TabServicos";
import ModalServico from "../../Components/servicos/modalServico/ModalServico";
import Carousel from "../../Components/carousel/carousel";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <Grid alignItems="center" item xs={6}>
        <Box paddingX={20}>
          <Typography
            variant="h3"
            gutterBottom
            color="textPrimary"
            component="h3"
            align="center"
            style={{ color: "#5e16ee", fontWeight: "bold" }}
          >
            Seja bem vindo(a)!
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            color="textPrimary"
            component="h5"
            align="center"
            style={{ color: "#5e16ee ", fontWeight: "bold" }}
          >
            Ache aqui seu profissional!
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Box marginRight={1}>{<ModalServico />}</Box>
          <Link to="/servicos">
            <Button
            variant="outlined"
            style={{
              borderColor: "white",
              backgroundColor: "#5E16EE",
              color: "white",
            }}
          >
            Ver Serviços
          </Button>
          </Link>

          </Box>
      </Grid>
      <Grid xs={6}  style={{ display: 'flex', justifyContent: 'center'}} >
        <img
          src="https://i.imgur.com/wApjKwJ.png"
          alt=""
          width="250px"
          height="250px"
        />
      </Grid>
      <Grid xs={12} style={{ backgroundColor: "white" }}></Grid>
      {<Carousel />}
      {<TabServicos />}
    </Grid>
    </div>
  );
}
export default Home;