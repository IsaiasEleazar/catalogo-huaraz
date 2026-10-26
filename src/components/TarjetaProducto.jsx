import React from 'react';
import { Link } from 'react-router-dom';

function TarjetaProducto({ producto }) {
  return (
    <div style={{ 
      background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.5), rgba(15, 23, 42, 0.8))',
      backdropFilter: 'blur(8px)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderRadius: '16px', 
      padding: '24px', 
      textAlign: 'center', 
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '380px',
      boxSizing: 'border-box',
      borderTop: '2px solid rgba(0, 242, 254, 0.3)' // Línea de neón superior
    }}>
      <div>
        <div style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden', height: '140px', marginBottom: '15px' }}>
          <img src={producto.imagen} alt={producto.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', top: '8px', right: '8px', fontSize: '9px', background: 'rgba(15, 23, 42, 0.85)', color: '#00f2fe', padding: '3px 8px', borderRadius: '4px', border: '1px solid rgba(0, 242, 254, 0.4)', fontWeight: 'bold' }}>
            ID_00{producto.id}
          </div>
        </div>
        
        <h3 style={{ fontSize: '1.1rem', color: '#f1f5f9', margin: '0 0 10px 0', letterSpacing: '0.5px' }}>{producto.nombre}</h3>
        <p style={{ color: '#00f2fe', fontWeight: 'bold', fontSize: '1.4rem', margin: '0 0 12px 0', textShadow: '0 0 10px rgba(0, 242, 254, 0.3)' }}>${producto.precio}</p>
        
        <span style={{ fontSize: '10px', background: 'rgba(0, 242, 254, 0.1)', color: '#38bdf8', padding: '5px 12px', borderRadius: '20px', border: '1px solid rgba(0, 242, 254, 0.2)', textTransform: 'uppercase', fontWeight: 'bold' }}>
          {producto.categoria}
        </span>
      </div>

      <div style={{ marginTop: '20px' }}>
        <Link to={`/productos/${producto.id}`} style={{ 
          background: 'linear-gradient(90deg, rgba(0, 242, 254, 0.15), rgba(79, 172, 254, 0.15))',
          color: '#00f2fe', 
          textDecoration: 'none', 
          padding: '10px 0', 
          borderRadius: '8px', 
          fontSize: '12px', 
          display: 'block',
          border: '1px solid #00f2fe',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '1.5px',
          boxShadow: '0 0 15px rgba(0, 242, 254, 0.1)',
          cursor: 'pointer'
        }}>
          ACCEDER_DATOS
        </Link>
      </div>
    </div>
  );
}

export default TarjetaProducto;
