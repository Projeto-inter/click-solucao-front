import { Box, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import {Button} from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom';
import Servico from '../../../model/Servico';
import { busca } from '../../../service/Service';
import './ListaServicos.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

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
      alert('Usuário deslogado, por favor, logue no site para realizar a ação!')
      navigate('/login')
    }
  }, [])

  return (
    <>
      <Grid container my={2} px={4}>
        <Box display='flex' flexWrap={'wrap'} width={'100%'}>
          {servicos.map((servicos) => (
            <Grid item xs={3} border={1} borderRadius={2} borderColor={'lightgray'} p={2}>
            <Typography>Serviços:</Typography>
            <Typography>{servicos.nome}</Typography>
            <Typography>{servicos.descricao}</Typography>
            <Typography>{servicos.local}</Typography>
            <Typography>Tema: {servicos.categoria?.descricao}</Typography>
            <Box display={'flex'} gap={4}>
              <Link to={`/formCategorias/${servicos.id}`}>
                <Button fullWidth variant='contained' color='primary'>editar</Button>
              </Link>
              <Link to={`/deleteCategorias/${servicos.id}`}>
                <Button fullWidth variant='contained' color='secondary'>apagar</Button>
              </Link>
            </Box>
          </Grid>
          ))}
        </Box>
      </Grid>
    </>
  )
}

export default ListaServicos;