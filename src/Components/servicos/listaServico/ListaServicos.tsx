import { Box, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
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
    {
      servicos.map(servico => (
        <Box m={2} >
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Serviços
              </Typography>
              <Typography variant="h5" component="h2">
                {servicos.nome}
              </Typography>
              <Typography variant="h5" component="h2">
                {servicos.foto}
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
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>

                <Link to={`/formularioPostagem/${servico.id}`} className="text-decorator-none" >
                  <Box mx={1}>
                    <Button variant="contained" className="marginLeft" size='small' color="primary" >
                      editar
                    </Button>
                  </Box>
                </Link>
                <Link to={`/deletarPostagem/${servico.id}`} className="text-decorator-none">
                  <Box mx={1}>
                    <Button variant="contained" size='small' color="secondary">
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))
    }
  </>
)
}

export default ListaServicos;