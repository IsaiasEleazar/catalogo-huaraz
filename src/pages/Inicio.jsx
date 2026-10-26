import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Inicio() {
  // Simulación de telemetría en tiempo real usando el Ciclo de Vida (useEffect)
  const [latencia, setLatencia] = useState(12);
  const [cargaCpu, setCargaCpu] = useState(24);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setLatencia(Math.floor(Math.random() * (18 - 8 + 1)) + 8);
      setCargaCpu(Math.floor(Math.random() * (45 - 18 + 1)) + 18);
    }, 2500);

    return () => clearInterval(intervalo); // Limpieza de memoria al desmontar
  }, []);

  return (
    <div style={{ color: '#e2e8f0', fontFamily: '"Courier New", Courier, monospace', maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      
      {/* Sección Hero Cyberpunk */}
      <header style={{
        textAlign: 'center',
        padding: '60px 20px',
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.8))',
        borderRadius: '16px',
        border: '1px solid #00f2fe',
        boxShadow: '0 0 25px rgba(0, 242, 254, 0.25)',
        marginBottom: '40px'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', letterSpacing: '2px', textShadow: '0 0 10px #00f2fe', margin: '0 0 15px 0' }}>
          CORE_TIENDA_TECNOLOGÍA_HUARAZ
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 25px auto', lineHeight: '1.6' }}>
          Sistemas embebidos, computación cuántica local y hardware de última generación impulsado por interfaces reactivas de latencia cero.
        </p>
        <Link to="/catalogo" style={{
          background: 'linear-gradient(90deg, #00f2fe, #4facfe)',
          color: '#0f172a',
          textDecoration: 'none',
          padding: '12px 30px',
          borderRadius: '8px',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          boxShadow: '0 4px 15px rgba(0, 242, 254, 0.4)',
          display: 'inline-block',
          transition: 'all 0.3s ease'
        }}>
          Inicializar Catálogo
        </Link>
      </header>

      {/* Grid de Estado del Servidor y Características Avanzadas */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        
        {/* Panel de Telemetría (React Virtual DOM stats) */}
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #00f2fe', boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>
          <h3 style={{ color: '#00f2fe', margin: '0 0 15px 0', fontSize: '1.2rem' }}>⚡ TELEMETRÍA_SPA</h3>
          <div style={{ fontSize: '14px', lineHeight: '2' }}>
            <p>• MOTOR_RENDER: <span style={{ color: '#38bdf8' }}>React 19 VDOM</span></p>
            <p>• COMPILADOR_HMR: <span style={{ color: '#38bdf8' }}>Vite Core v6</span></p>
            <p>• LATENCIA_RED: <span style={{ color: '#4ade80', fontWeight: 'bold' }}>{latencia} ms</span></p>
            <p>• NODOS_ACTIVOS: <span style={{ color: '#a78bfa' }}>CFP_HUARAZ_NODE_01</span></p>
          </div>
        </div>

        {/* Panel de Infraestructura */}
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f43f5e', boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>
          <h3 style={{ color: '#f43f5e', margin: '0 0 15px 0', fontSize: '1.2rem' }}>🛡️ NÚCLEO_REACTIVO</h3>
          <div style={{ fontSize: '14px', lineHeight: '2' }}>
            <p>• ARQUITECTURA: <span style={{ color: '#fda4af' }}>Estructura Componentizada</span></p>
            <p>• VALIDACIÓN_MÉTRICAS: <span style={{ color: '#fda4af' }}>Esquemas Yup Seguros</span></p>
            <p>• NAVEGACIÓN: <span style={{ color: '#fda4af' }}>Enrutamiento aislado local</span></p>
            <p>• CARGA_NÚCLEO: <span style={{ color: '#f43f5e', fontWeight: 'bold' }}>{cargaCpu}%</span></p>
          </div>
        </div>

        {/* Panel de Servicios Técnicos */}
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #eab308', boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>
          <h3 style={{ color: '#eab308', margin: '0 0 15px 0', fontSize: '1.2rem' }}>🌐 DISTRIBUCIÓN_LOCAL</h3>
          <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.6', margin: '0' }}>
            Despliegue de nodos y entrega técnica en todo el callejón de Huaylas. Soporte automatizado con inteligencia artificial para la optimización de hardware empresarial.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Inicio;
