    import React, { ChangeEvent, useEffect, useState } from 'react';
    import { useSelector } from 'react-redux';
    import { TokenState } from '../../store/tokens/tokensReducer';
    import { buscaId, put } from '../../service/Service';
    import './Perfil.css';
    import  User  from '../../model/User';
    import {
    Grid,
    Typography,
    Avatar,
    Box,
    Button,
    Accordion,
    AccordionDetails,
    AccordionSummary,
    TextField,
    } from '@mui/material';
    import { Link } from 'react-router-dom';
    import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

    function Perfil() {
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    );
    const userId = useSelector<TokenState, TokenState['id']>((state) => state.id);

    const [usuario, setUsuario] = useState<User>({
        id: +userId,
        foto: '',
        nome: '',
        usuario: '',
        senha: '',
        servico: null,
        cpf: '',
        cnpj: '',
        dataDeNascimento: '',
        telefone: '',
    });

    async function getUsuario() {
        try {
        await buscaId(`/usuarios/${usuario.id}`, setUsuario, {
            headers: {
            Authorization: token,
            },
        });
        } catch (error) {
        console.log(error);
        }
    }

    useEffect(() => {
        getUsuario();
    }, []);

    useEffect(() => {
        setUsuario({
        ...usuario,
        senha: ''
        })
    }, [usuario.usuario])

    const [confirmarSenha, setConfirmarSenha] = useState<string>('');

    function confirmSenha(event: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(event.target.value);
    }

    function updateModel(event: ChangeEvent<HTMLInputElement>) {
        setUsuario({
        ...usuario,
        [event.target.name]: event.target.value,
        });
    }

    async function atualizar(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        if (usuario.senha === confirmarSenha && usuario.senha.length >= 8) {
        try {
            await put('/usuarios/atualizar', usuario, setUsuario, {
            headers: {
                Authorization: token,
            },
            });
            alert('Usuário atualizado com sucesso');
            setUsuario({ ...usuario, senha: '' });
            setConfirmarSenha('');
        } catch (error) {
            alert('Falha ao cadastrar o usuário, verifique os campos');
        }
        } else {
        alert('Os campos de Senha e Confirmar Senha estão diferentes');
        setUsuario({ ...usuario, senha: '' });
        setConfirmarSenha('');
        }
    }

    console.log(usuario);

    return (
        <div className="perfilContainer">
        <div className="perfilBanner">
            <div>
            <h2>Perfil de: {usuario.nome}</h2>
            <p>{usuario.usuario}</p>
            </div>
            <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} />
        </div>
        <div className="perfilUpdate">
            <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant="h5" style={{ margin: '0 auto' }}>
                Atualizar Perfil
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <form onSubmit={atualizar}>
                <Box
                    display={'flex'}
                    width={'100%'}
                    flexDirection={'column'}
                    gap={2}
                >
                    <TextField
                    name="nome"
                    label="Nome completo"
                    value={usuario.nome}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        updateModel(event)
                    }
                    />
                    <TextField
                    name="usuario"
                    label="Endereço de e-mail"
                    disabled
                    value={usuario.usuario}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        updateModel(event)
                    }
                    />
                    <TextField
                    name="foto"
                    label="URL da foto"
                    value={usuario.foto}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        updateModel(event)
                    }
                    />
                    <TextField
                    name="senha"
                    label="Senha"
                    type="password"
                    value={usuario.senha}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        updateModel(event)
                    }
                    />
                    <TextField
                    name="confirmarSenha"
                    label="Confirmar senha"
                    type="password"
                    value={confirmarSenha}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        confirmSenha(event)
                    }
                    />
                <Button fullWidth variant={'contained'} type='submit'>Atualizar</Button>
                </Box>
                </form>
            </AccordionDetails>
            </Accordion>
        </div>
        <hr />
        <h3 style={{ textAlign: 'center' }}>Seus serviços:</h3>
        <div className="perfilServico">
            {usuario.servico?.map((servico) => (
            <Grid
                item
                border={1}
                borderRadius={2}
                borderColor={'lightgray'}
                p={2}
            >
                <Typography>Serviço:</Typography>
                <Typography>{servico.nome}</Typography>
                <Typography>{servico.descricao}</Typography>
                <Avatar
                src={usuario.foto}
                style={{ border: '1px solid black' }}
                alt=""
                />
                {/* <Typography>
                {new Intl.DateTimeFormat('pt-br', {
                    dateStyle: 'full',
                }).format(new Date(servico.data))}
                </Typography> */}
                <Typography>Tema: {servico.categoria?.descricao}</Typography>
                <Box display={'flex'} gap={4}>
                <Link to={`/formServico/${servico.id}`}>
                    <Button fullWidth variant="contained" color="primary">
                    editar
                    </Button>
                </Link>
                <Link to={`/deleteServico/${servico.id}`}>
                    <Button fullWidth variant="contained" color="secondary">
                    apagar
                    </Button>
                </Link>
                </Box>
            </Grid>
            ))}
        </div>
        </div>
    );
    }

export default Perfil;
