import React, { useState } from 'react';
import { productosTecnologicos } from '../datos';
import TarjetaProducto from '../components/TarjetaProducto';

function Catalogo() {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  const productosFiltrados = productosTecnologicos.filter((prod) => {
    const coincideBusqueda = prod.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoriaSeleccionada === '' || prod.categoria === categoriaSeleccionada;
    return coincideBusqueda && coincideCategoria;
  });

  return (
    <div style={{ color: '#e2e8f0', maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ fontSize: '1.8rem', color: '#00f2fe', textShadow: '0 0 8px rgba(0, 242, 254, 0.3)', marginBottom: '25px', fontFamily: 'monospace' }}>
        // FILTRADO_DE_HARDWARE_DISPONIBLE
      </h2>
      
      {/* Controles Estilizados en Dark Tech */}
      <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', flexWrap: 'wrap' }}>
        <input 
          type="text" 
          placeholder="Escriba el identificador o nombre..." 
          value={busqueda} 
          onChange={(e) => setBusqueda(e.target.value)} 
          style={{ 
            padding: '10px 15px', 
            width: '280px', 
            borderRadius: '6px', 
            border: '1px solid #334155', 
            background: '#0f172a', 
            color: '#fff',
            outline: 'none',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
          }}
        />

        <select 
          value={categoriaSeleccionada} 
          onChange={(e) => setCategoriaSeleccionada(e.target.value)}
          style={{ 
            padding: '10px 15px', 
            borderRadius: '6px', 
            border: '1px solid #334155', 
            background: '#0f172a', 
            color: '#fff',
            outline: 'none',
            cursor: 'pointer'
          }}
        >
          <option value="">FILTRAR_POR_CATEGORÍA: TODAS</option>
          <option value="Laptops">LAPTOPS</option>
          <option value="Celulares">CELULARES</option>
          <option value="Monitores">MONITORES</option>
        </select>
      </div>

      {/* Grid de Tarjetas */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '25px' }}>
        {productosFiltrados.map((producto) => (
          <TarjetaProducto key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}

export default Catalogo;
