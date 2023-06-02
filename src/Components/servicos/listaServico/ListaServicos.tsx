import { Box, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import {Button} from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom';
import Servico from '../../../model/Servico';
import { busca } from '../../../service/Service';
import './ListaServicos.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';


function ListaServicos() {

  const [servicos, setServicos] = useState<Servico[]>([])
  const navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  
  function getServicos() {
    busca('/servico', setServicos, {
      headers: {
        Authorization: token
      }
    })
  }
  
  useEffect(() => {
    getServicos()
  }, [])

  useEffect(() => {
    if(token === ''){ 
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
      navigate('/login')
    }
  }, [])

  return (
    <>
    {
      servicos.map(servico => (
        <Box m={2} >
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Serviços
              </Typography>
              <Typography variant="h5" component="h2">
                {servico.nome}
              </Typography>
              <Typography variant="h5" component="h2">
                {servico.foto}
              </Typography>
              <Typography variant="body2" component="p">
                {servico.descricao}
              </Typography>
              <Typography variant="body2" component="p">
                {servico.local}
                </Typography>
                <Typography variant="body2" component="p">
                {servico.valor}
              </Typography>
              <Typography variant="body2" component="p">
                {servico.categoria?.descricao}
              </Typography>
              <Typography variant="body2" component="p">
                Postado por: {servico.usuario?.nome}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      ))
    }
  </>
)
}

export default ListaServicos;
