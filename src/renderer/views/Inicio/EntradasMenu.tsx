/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable prettier/prettier */

import React, { useState } from 'react';

import {
  Box,
  Card,
  FormControl,
  Select,
  MenuItem,
  Grid,
  InputLabel,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  SelectChangeEvent,
} from '@mui/material';

import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import PrintIcon from '@mui/icons-material/Print';

import '../../styles/EntradasMenu.css';

function EntradasMenu() {
  const database = [
    {
      id_almacen: 1,
      nombre: 'Tienda',
    },
    {
      id_almacen: 2,
      nombre: 'Bodega',
    },
  ];

  const [almacenSelected, setAlmacenSelected] = useState('0');

  const handleAlmacenSelectChange = (event: SelectChangeEvent) => {
    // Prevent page reload
    event.preventDefault();

    setAlmacenSelected(event.target.value);

    const almacenData = database.find(
      (almacen) => almacen.id_almacen.toString() == almacenSelected
    );
  };

  return (
    <div className="entradas-menu" >
      <Card sx={{ height: '89vh' }}>
        <p>ENTRADAS</p>
      </Card>

    </div>
  );
}

export default EntradasMenu;
