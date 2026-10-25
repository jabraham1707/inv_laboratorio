import React from 'react';

export default function TarjetaEquipo({ equipo }) {
  // Asignación de badges de estado según la disponibilidad del equipo
  const getBadgeClass = (estado) => {
    switch (estado) {
      case 'Disponible':
        return 'bg-success text-white';
      case 'En uso':
        return 'bg-info text-dark';
      case 'Mantenimiento':
      case 'En mantenimiento':
        return 'bg-warning text-dark';
      default:
        return 'bg-secondary text-white';
    }
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card card-lab-dark h-100 shadow-sm border-0 border-top border-4 border-info rounded-3">
        <div className="card-body d-flex flex-column p-3 overflow-hidden">
          {/* Categoría y Estado */}
          <div className="d-flex justify-content-between align-items-center mb-2 gap-1">
            <span className="badge bg-dark text-info border border-secondary text-truncate max-w-100">
              {equipo.categoria}
            </span>
            <span className={`badge ${getBadgeClass(equipo.estado)} flex-shrink-0`}>
              {equipo.estado}
            </span>
          </div>

          {/* Nombre del equipo de computación */}
          <h5 className="card-title text-white fw-bold my-2 text-break lh-sm fs-6">
            {equipo.nombre}
          </h5>

          {/* Cantidad y detalles */}
          <div className="mt-auto pt-3 border-top border-secondary d-flex justify-content-between align-items-center">
            <small className="text-light-50 opacity-75 fw-semibold">Cantidad:</small>
            <span className="fw-bold fs-5 text-info">{equipo.cantidad}</span>
          </div>
        </div>
      </div>
    </div>
  );
}