import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import ListaServicos from '../ListaServicos';



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
        <TabPanel value="1"><ListaServicos /></TabPanel>
        <TabPanel value="2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo esse quo accusamus voluptatum minus repudiandae cupiditate quisquam illo praesentium deserunt asperiores optio explicabo nulla facilis, facere excepturi debitis atque!
        </TabPanel>
        
      </TabContext>
    </div>
  )
}

export default TabServicos