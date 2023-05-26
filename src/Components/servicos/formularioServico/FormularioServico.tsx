import {Box,Button,Container,FormControl,FormHelperText,InputLabel,MenuItem,Select,TextField,Typography,
  } from '@mui/material';
  import React, { ChangeEvent, useEffect, useState } from 'react';
  import { Postagem } from '../../../model/Postagem';
  import { useNavigate, useParams } from 'react-router-dom';
  import useLocalStorage from 'react-use-localstorage';
  import Servico from '../../../model/Servico';
  import { busca, buscaId, post, put } from '../../../service/service';
import Categoria from '../../../model/Categoria';

  
  function FormularioServico() {
    const navigate = useNavigate();
  
    const [token, setToken] = useLocalStorage('token');
  
    const { id } = useParams<{ id: string }>();
  
    const [servicos, setServicos] = useState<Servico[]>([]);
  
    const [categoria, setCategoria] = useState<Categoria>({
      id: 0,
      descricao: '',
    });
  
    const [servico, setServico] = useState<Servico>({
      id: 0,
      nome: '',
      descricao: '',
      local: '',
      foto: '',
      valor: 0,
      categoria: null,
    });
  
    useEffect(() => {
      if(token === ''){ 
        alert('Está faltando o token')
        navigate('/login')
      }
    }, [])
  
    async function getCategorias() {
      try {
        await busca('/categorias', setCategoria, {
          headers: {
            Authorization: token,
          },
        });
      } catch (error: any) {
        if (error.toString().contains('403')) {
          alert('Token expirado, logue novamente');
          setToken('');
          navigate('/login');
        }
      }
    }
  
    async function getServicoById(id: string) {
      await busca(`/servicos/${id}`, setServico, {
        headers: {
          Authorization: token
        }
      })
    }
  
    useEffect(() => {
      getCategorias();
      if(id !== undefined) {
        getServicoById(id)
      }
    }, []);
  
    function updateModel(event: ChangeEvent<HTMLInputElement>) {
      setServico({
        ...servico,
        [event.target.name]: event.target.value,
        categoria: categoria,
      });
    }
  
    useEffect(() => {
      setServico({
        ...servico,
        categoria: categoria,
      });
    }, [categoria]);
  
    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
      event.preventDefault();
  
      if (id !== undefined) {
        try {
          await put('/servicos', servico, setServico, {
            headers: {
              Authorization: token,
            },
          });
          alert('deu certo - atualização')
          navigate('/servicos')
        } catch (error) {
          alert('deu erro');
        }
      } else {
        try {
          await post('/servicos', servico, setServico, {
            headers: {
              Authorization: token,
            },
          });
          alert('foi - cadastro')
          navigate('/servicos')
        } catch (error) {
          alert('deu erro');
        }
      }
    }
  
    return (
      <Container maxWidth="sm">
        <Box my={2}>
          <form onSubmit={onSubmit}>
            <Typography variant="h4" align="center">
              Formulário de {id !== undefined ? ' atualização ' : ' cadastro '} do serviço
            </Typography>
            <TextField
              name="local"
              fullWidth
              margin="normal"
              label="Nome do serviço"
              helperText='Pelo menos 5 caracteres'
              //helperText="pesquisar como coloca a foto"
              value={servico.nome}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
            />
            <TextField
              name="texto"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              label="Texto do serviço"
              value={servico.descricao}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
            />
  
            <FormControl fullWidth margin="normal">
              <InputLabel id="selectCategoria">Categoria</InputLabel>
              <Select
                labelId="selectCategoria"
                onChange={(event) =>
                  buscaId(`/categorias/${event.target.value}`, setCategoria, {
                    headers: {
                      Authorization: token,
                    },
                  })
                }
              >
                {categorias.map((categoria) => (
                  <MenuItem key={categoria.id} value={categoria.id}>
                    {categoria.descricao}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>Escolha uma categoria para o seu produto</FormHelperText>
            </FormControl>
  
            <Button type="submit" variant="contained" color="primary" fullWidth disabled={categoria.id === 0}>
              {id !== undefined ? 'Atualizar Serviço' : 'Cadastrar Serviço'}
            </Button>
          </form>
        </Box>
      </Container>
    );
  }
  
  export default FormularioServico;