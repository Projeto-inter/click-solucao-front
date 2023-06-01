import React from 'react';
import './Sobre.css'
import {Grid, Box, Typography, TextField, Button} from '@mui/material';
import { Link } from 'react-router-dom';

function Sobre(){
    return(
        <>
            <Box>
                <h1>Sobre o projeto</h1>
                <p>Click Soluções é uma plataforma de e-commerce inovadora que impulsiona a comercialização de serviços, oferecendo renda e autonomia aos participantes. Ao unir vendedores e consumidores, a plataforma facilita a expansão dos negócios e a variedade de opções de serviços. Com foco no empreendedorismo sustentável, promove práticas éticas, soluções ecológicas e apoio a negócios locais, contribuindo para o desenvolvimento sustentável das comunidades. Seja você um empreendedor ou consumidor, o Click Soluções é o destino ideal para negócios e serviços personalizados.</p>
                <p>O click Soluções é o Projeto Integrador do Grupo 3 da 63ª turma do Bootcamp da Generation Brasil. Nele foi utilizado Java, SpringBoot, Docker, HTML, CSS, JavaScript entre outras ferramentas e linguagens.</p>
            </Box>
        </>
    )
}

export default Sobre;