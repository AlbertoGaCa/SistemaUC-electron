/* eslint-disable import/no-named-as-default */
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './views/Login';
import Inicio from './views/Inicio';
import Existencias from './views/Inicio/Existencias';
import EntradasMenu from './views/Inicio/EntradasMenu';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route key={1} path="/" element={<Login />} />
        <Route key={2} path="inicio" element={<Inicio />}>
          <Route key={3} path="existencias" element={<Existencias />} />
          <Route key={4} path="entradasMenu" element={<EntradasMenu />} />
        </Route>
      </Routes>
    </Router>
  );
}
