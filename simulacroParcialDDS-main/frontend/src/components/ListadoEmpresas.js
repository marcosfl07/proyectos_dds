import React from 'react';

const ListadoEmpleados = ({ lista }) => {
  
  return (
    <div className="container mt-3">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>RazonSocial</th>
            <th>Empleados</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((item) => (
             <tr key={item.IdEmpresa}>
              <td>{item.IdEmpresa}</td>
              <td>{item.RazonSocial}</td>
              <td>{item.Empleados}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoEmpleados;
