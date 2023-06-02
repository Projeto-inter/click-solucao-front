import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import ListaServicos from '../listaServico/ListaServicos';
import './TabServicos.css'
import { Box } from '@mui/material';



function TabServicos() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div >
      <TabContext value={value}>
        <AppBar position="static">
          <TabList onChange={handleChange} aria-label="simple tabs example" style={{margin: '0 auto'}}>
            <Tab label="Servicos" value="1" />
            <Tab label="Sobre" value="2" />
          </TabList>
        </AppBar>
        <TabPanel className="tbservicos" value="1">
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <ListaServicos />
          </Box>
          </TabPanel>
        <TabPanel value="2">
          Click Soluções é uma plataforma de e-commerce inovadora que impulsiona a comercialização de serviços, oferecendo renda e autonomia aos participantes. Ao unir vendedores e consumidores, a plataforma facilita a expansão dos negócios e a variedade de opções de serviços. Com foco no empreendedorismo sustentável, promove práticas éticas, soluções ecológicas e apoio a negócios locais, contribuindo para o desenvolvimento sustentável das comunidades. Seja você um empreendedor ou consumidor, o Click Soluções é o destino ideal para negócios e serviços personalizados.
          O click Soluções é o Projeto Integrador do Grupo 3 da 63ª turma do Bootcamp da Generation Brasil. Nele foi utilizado Java, SpringBoot, Docker, HTML, CSS, JavaScript entre outras ferramentas e linguagens
        </TabPanel>
        
      </TabContext>
    </div>
  )
}

export default TabServicos
