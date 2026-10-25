import React, { useState } from 'react';
import TarjetaEquipo from './components/TarjetaEquipo';
import './App.css';

export default function App() {
  
  const [equipos] = useState([
    { id: 1, nombre: 'Workstation Dell Precision 3660', categoria: 'Computadoras', cantidad: 12, estado: 'Disponible' },
    { id: 2, nombre: 'Servidor Rack PowerEdge R750', categoria: 'Servidores', cantidad: 2, estado: 'En uso' },
    { id: 3, nombre: 'Microprocesador Intel Core i9-14900K', categoria: 'Procesadores', cantidad: 8, estado: 'Disponible' },
    { id: 4, nombre: 'Tarjeta GPU NVIDIA RTX 4090', categoria: 'Componentes', cantidad: 4, estado: 'En mantenimiento' },
    { id: 5, nombre: 'Switch Administrable Cisco Catalyst 24p', categoria: 'Redes', cantidad: 5, estado: 'Disponible' },
    { id: 6, nombre: 'Memoria RAM DDR5 32GB Corsair Vengeance', categoria: 'Componentes', cantidad: 16, estado: 'Disponible' },
    { id: 7, nombre: 'Router MicroTik Cloud Core 1036', categoria: 'Redes', cantidad: 3, estado: 'En uso' },
    { id: 8, nombre: 'Disco SSD NVMe M.2 Samsung 2TB', categoria: 'Almacenamiento', cantidad: 10, estado: 'Disponible' },
    { id: 9, nombre: 'Kit Programador de Microcontroladores STM32', categoria: 'Electrónica', cantidad: 6, estado: 'En mantenimiento' },
    { id: 10, nombre: 'Monitor Profesional LG Ultrawide 34"', categoria: 'Pantallas', cantidad: 14, estado: 'Disponible' }
  ]);

  // Estado para mostrar/ocultar tarjetas
  const [mostrarInventario, setMostrarInventario] = useState(true);

  // Alternar estado de visibilidad
  const toggleInventario = () => {
    setMostrarInventario(!mostrarInventario);
  };

  return (
    <div className="min-vh-100 bg-lab-dark d-flex flex-column">
      {/* Encabezado */}
      <header className="py-4 mb-4 text-white shadow-sm header-lab-comp">
        <div className="container">
          <h1 className="h3 m-0 fw-bold">Laboratorio de Computación y Hardware</h1>
          <p className="m-0 text-white-50">Sistema de control de equipos, componentes y servidores</p>
        </div>
      </header>

      
      <main className="container pb-5 flex-grow-1">
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center card-lab-dark p-3 rounded-3 shadow-sm mb-4 border-start border-4 border-info">
          <div>
            <h2 className="h5 mb-1 text-white fw-semibold">Inventario de Equipos</h2>
            <p className="text-light-50 opacity-75 small mb-0">
              Registros activos: <strong>{equipos.length}</strong>
            </p>
          </div>

      
          <button
            onClick={toggleInventario}
            className="btn btn-gradiente-lab px-4 py-2 mt-3 mt-sm-0 fw-semibold text-white border-0 shadow-sm"
          >
            {mostrarInventario ? 'Ocultar inventario' : 'Mostrar inventario'}
          </button>
        </div>

        {/* Zona de tarjetas dinámicas con map() y key */}
        {mostrarInventario ? (
          <div className="row">
            {equipos.map((equipo) => (
              <TarjetaEquipo key={equipo.id} equipo={equipo} />
            ))}
          </div>
        ) : (
          <div className="card-lab-dark text-center my-5 py-4 shadow-sm rounded-3 border border-secondary" role="alert">
            <p className="fs-6 m-0 text-white-50">
              El inventario se encuentra oculto. Presione el botón superior para visualizar los equipos.
            </p>
          </div>
        )}
      </main>

      {/* Pie de página */}
      <footer className="card-lab-dark border-top border-secondary py-3 text-center text-white-50 small mt-auto">
        <div className="container">
          <p className="m-0">© 2026 Laboratorio de Computación — Gestión de Hardware</p>
        </div>
      </footer>
    </div>
  );
}