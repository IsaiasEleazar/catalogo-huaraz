import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { productosTecnologicos } from '../datos';

function DetalleProducto() {
  const { id } = useParams();
  const producto = productosTecnologicos.find((p) => p.id === parseInt(id));

  if (!producto) {
    return <p style={{ padding: '20px', color: 'red' }}>Producto no encontrado en el sistema.</p>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: '250px', borderRadius: '8px' }} />
      <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#002F6C' }}>Precio: ${producto.precio}</p>
      <p>Categoría: {producto.categoria}</p>
      <p style={{ color: '#666' }}>Disponibilidad inmediata para entrega local en Huaraz.</p>
      <Link to="/catalogo" style={{ color: '#002F6C', fontWeight: 'bold' }}>← Volver al catálogo</Link>
    </div>
  );
}

export default DetalleProducto;
