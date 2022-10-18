/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import { Link, Outlet} from "react-router-dom";

import {
  createTheme,
  ThemeProvider,
  Tab,
  Tabs
} from '@mui/material';

import AssignmentIcon from '@mui/icons-material/Assignment';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import ArticleIcon from '@mui/icons-material/Article';
import KeyIcon from '@mui/icons-material/Key';

import '../styles/Inicio.css';

const tabTheme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: 'white',
            borderRadius: '25px',
          },
          '&.MuiTab-textColorPrimary': {
            color: '#c1c1c1'
          }

        }
      }
    }
  }
});

function Inicio() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="app">
      <ThemeProvider theme={ tabTheme }>
        <Tabs
          value={value}
          style={{ background: '#012583' }}
          onChange={handleChange}
          aria-label="icon position tabs example"
        >
          <Tab icon={<AssignmentIcon />} label="Existencias" component={Link} to="/inicio/existencias" />
          <Tab icon={<LoginIcon />} label="Entradas" />
          <Tab icon={<LogoutIcon />} label="Salidas" />
          <Tab icon={<ShoppingCartIcon />} label="Ventas" />
          <Tab icon={<KeyboardReturnIcon />} label="Devoluciones" />
          <Tab icon={<RequestQuoteIcon />} label="Devoluciones" />
          <Tab icon={<ArticleIcon />} label="Catalogo" />
          <Tab icon={<KeyIcon />} label="Cajón" />

        </Tabs>
      </ThemeProvider>

      <Outlet />
    </div>
  );
}

export default Inicio;
