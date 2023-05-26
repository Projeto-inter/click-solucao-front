import { Box, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import {Button} from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { Servico } from '../../model/Servico';
import { busca } from '../../../service/service';

function ListaServiços() {

  const [servicos, setServicos] = useState<Servico[]>([])
  const navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token');
  
  function getPostagens() {
    busca('/servicos', setServicos, {
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
      alert('Ta tirando né??? sem token não rola')
      navigate('/login')
    }
  }, [])

  return (
    <>
      <Grid container my={2} px={4}>
        <Box display='flex' flexWrap={'wrap'} width={'100%'}>
          {servicos.map((servicos) => (
            <Grid item xs={3} border={1} borderRadius={2} borderColor={'lightgray'} p={2}>
            <Typography>Servico:</Typography>
            <Typography>{servico.titulo}</Typography>
            <Typography>{servico.texto}</Typography>
            <Typography>{new Intl.DateTimeFormat('pt-br', {
              dateStyle: 'full'
            }).format(new Date(servico.data))}</Typography>
            <Typography>Tema: {servico.categoria?.descricao}</Typography>
            <Box display={'flex'} gap={4}>
              <Link to={`/formularioPostagem/${servico.id}`}>
                <Button fullWidth variant='contained' color='primary'>editar</Button>
              </Link>
              <Link to={`/apagarPostagem/${servico.id}`}>
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

export default ListaServicos