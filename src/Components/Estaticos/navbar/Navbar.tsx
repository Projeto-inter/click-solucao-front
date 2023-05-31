import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box, Button, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { addToken } from "../../../store/tokens/action";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const dispatch = useDispatch();
  let navigate = useNavigate();

  function goLogout() {
    dispatch(addToken(""));
    toast.info('Usário deslogado', {
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

  var navbarComponent;

  if (token !== "") {
    navbarComponent = (
      <AppBar className="styleNav" position="static">
        <Toolbar  variant="dense">
        <Grid container justifyContent={'space-between'} className='fonte'>
        <Box className="imgNav">
              <Typography variant="h5">
                <img style={{height: "45px"}} src="https://ik.imagekit.io/devdaiane/lampadinha.png?updatedAt=1685559291505"></img>
              </Typography>
            </Box>
          <Box>
            <Link to="/home">
              <Button> 

                <Box  style={{ cursor: 'pointer' }} className="cursor">
                  <Typography variant="h6" color="inherit">
                    Click Soluções
                  </Typography>
                </Box>


              </Button>
            </Link>
            <Link to="/servicos">
              <Button>
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    serviços
                  </Typography>
                </Box>
              </Button>
            </Link>
            <Link to="/categorias">
              <Button>
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    categoria
                  </Typography>
                </Box>
              </Button>
            </Link>
            <Link to="/formCategorias">
              <Button>
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    cadastrar categoria
                  </Typography>
                </Box>
              </Button>
            </Link>
            <Link to="/perfil">
              <Button>
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    perfil
                  </Typography>
                </Box>
              </Button>
            </Link>

            <Button>
              <Box mx={1} className="cursor" onClick={goLogout}>
                <Typography variant="h6" color="inherit">
                  logout
                </Typography>
              </Box>
            </Button>
          </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }

  return <>{navbarComponent}</>;
}

export default Navbar;
