/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  Typography,
  Card,
  Box,
  FormControl,
  Select,
  SelectChangeEvent,
  InputLabel,
  MenuItem,
  TextField,
  Button,
  Grid
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import '../styles/Login.css';

function Login() {
  // React States for login
  const [errorMessages, setErrorMessages] = useState({ name: '', message: '' });
  const [userIdSelected, setUserIdSelected] = useState('1');
  const [passwordEntered, setPasswordEntered] = useState('');
  const navigate = useNavigate();

  const database = [
    {
      id: '1',
      username: 'veronica',
      password: 'pass1'
    },
    {
      id: '2',
      username: 'abel',
      password: 'pass1'
    },
    {
      id: '3',
      username: 'caja',
      password: 'pass1'
    }
  ];

  const errors = {
    uname: 'Usuario no encontrado',
    pass: 'Contraseña incorrecta, intente de nuevo'
  };

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Reset message errors
    setErrorMessages({ name: '', message: '' });

    // Prevent page reload
    event.preventDefault();

    // Find username login info
    const userData = database.find((user) => user.id == userIdSelected);

    // User exist in database, check password
    if (userData) {
      if (userData.password !== passwordEntered) {
        // Show password error
        setErrorMessages({ name: 'pass', message: errors.pass });
      } else {
        // Submit login is correct
        navigate('inicio');
      }
    } else {
      // Show user not found error
      setErrorMessages({ name: 'uname', message: errors.uname });
    }
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    setUserIdSelected(event.target.value);
  };

  const handlePasswordInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordEntered(event.target.value);
  };

  const renderErrorMessage = (name: string) =>
    name === errorMessages.name && (
      <div className="error">
        <Typography
          variant="caption"
          display="block"
          color="error"
          gutterBottom
        >
          {errorMessages.message}
        </Typography>
      </div>
    );

  return (
    <div className="login">
      <Grid className="main-container" container>
        <Grid item xs={8} />
        <Grid item xs={4}>
          <div>
            <Card className="login-card" sx={{ minWidth: 275, px: 10 }}>
              <Box className="login-box">
                <form className="login-form" onSubmit={handleLoginSubmit}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography variant="h6" color="text.primary" gutterBottom>
                      Inicio de sesión
                    </Typography>
                  </Box>

                  <Box display="flex">
                    <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
                      <InputLabel id="select-usuario">Usuario</InputLabel>
                      <Select
                        labelId="select-usuario"
                        id="select-usuario"
                        value={userIdSelected}
                        label="Usuario"
                        onChange={handleSelectChange}
                      >
                        {database.map((user) => (
                          <MenuItem key={user.id} value={user.id}>
                            {user.username}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>

                  <Box display="flex">
                    <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
                      <TextField
                        id="input-password"
                        variant="outlined"
                        label="Contraseña"
                        value={passwordEntered}
                        onChange={handlePasswordInputChange}
                        InputLabelProps={{ shrink: true }}
                      />
                    </FormControl>
                  </Box>
                  <Box>{renderErrorMessage('pass')}</Box>

                  <Box display="flex">
                    <FormControl sx={{ ml: 'auto', mt: 1, minWidth: 120 }}>
                      <Button type="submit" variant="contained" color="info">
                        Iniciar sesión
                      </Button>
                    </FormControl>
                  </Box>
                </form>
              </Box>
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
