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
  SelectChangeEvent
} from '@mui/material';

import '../../styles/InicioExistencias.css';

function Existencias() {
  const database = [
    {
      id_almacen: 1,
      nombre: 'Tienda'
    },
    {
      id_almacen: 2,
      nombre: 'Bodega'
    }
  ];

  const existencias = [
    {
      id_articulo: 1,
      nombre: 'Articulo1',
      cantidad: 50
    },
    {
      id_articulo: 2,
      nombre: 'Articulo2',
      cantidad: 21
    },
    {
      id_articulo: 3,
      nombre: 'Articulo3',
      cantidad: 1
    },
    {
      id_articulo: 4,
      nombre: 'Articulo4',
      cantidad: 4
    },
    {
      id_articulo: 5,
      nombre: 'Articulo5',
      cantidad: 70
    },
    {
      id_articulo: 6,
      nombre: 'Articulo6',
      cantidad: 80
    },
    {
      id_articulo: 7,
      nombre: 'Articulo6',
      cantidad: 80
    },
    {
      id_articulo: 8,
      nombre: 'Articulo6',
      cantidad: 80
    },
    {
      id_articulo: 9,
      nombre: 'Articulo6',
      cantidad: 80
    },
    {
      id_articulo: 10,
      nombre: 'Articulo6',
      cantidad: 80
    },
    {
      id_articulo: 11,
      nombre: 'Articulo6',
      cantidad: 80
    },
    {
      id_articulo: 12,
      nombre: 'Articulo6',
      cantidad: 80
    },
    {
      id_articulo: 13,
      nombre: 'Articulo6',
      cantidad: 80
    },
    {
      id_articulo: 14,
      nombre: 'Articulo6',
      cantidad: 80
    },
    {
      id_articulo: 15,
      nombre: 'Articulo6',
      cantidad: 80
    },
    {
      id_articulo: 16,
      nombre: 'Articulo6',
      cantidad: 80
    },
    {
      id_articulo: 17,
      nombre: 'Articulo6',
      cantidad: 80
    },
    {
      id_articulo: 18,
      nombre: 'Articulo6',
      cantidad: 80
    },
    {
      id_articulo: 19,
      nombre: 'Articulo6',
      cantidad: 80
    },
    {
      id_articulo: 20,
      nombre: 'Articulo6',
      cantidad: 80
    },
    {
      id_articulo: 21,
      nombre: 'Articulo6',
      cantidad: 80
    },
    {
      id_articulo: 22,
      nombre: 'Articulo6',
      cantidad: 80
    },
    {
      id_articulo: 23,
      nombre: 'Articulo6',
      cantidad: 80
    },
    {
      id_articulo: 24,
      nombre: 'Articulo6',
      cantidad: 80
    }
  ]

  database.unshift({ id_almacen: 0, nombre: 'Todos' });

  const [almacenSelected, setAlmacenSelected] = useState();

  const handleAlmacenSelectChange = (event: SelectChangeEvent) => {
    // Prevent page reload
    event.preventDefault();

    // setAlmacenSelected(event.target.value);
  };

  return (
    <div className="existencias">
      <Card>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box display="flex" className="existencias-box">
              <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="select-almacen">Almacen</InputLabel>
                <Select
                  labelId="select-almacen"
                  id="select-almacen"
                  value={almacenSelected}
                  label="Almacen"
                  onChange={handleAlmacenSelectChange}
                >
                  {database.map((almacen) => (
                    <MenuItem
                      key={almacen.id_almacen}
                      value={almacen.id_almacen}
                    >
                      {almacen.nombre}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Card>

      <Card  className="table-card">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box display="flex">
              <Paper sx={{ width: '100%', overflow: 'hidden' }}>
              <TableContainer sx={{ maxHeight: "100%" }}>
                <Table stickyHeader aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell align="right">Articulo</TableCell>
                      <TableCell align="right">Cantidad</TableCell>
                      <TableCell align="right">Disponible</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {existencias.map((row) => (
                      <TableRow
                        key={row.id_articulo}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 }
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.id_articulo}
                        </TableCell>
                        <TableCell align="right">{row.nombre}</TableCell>
                        <TableCell align="right">{row.cantidad}</TableCell>
                        <TableCell align="right" />
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

export default Existencias;
