import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Catalogo from './pages/Catalogo';
import DetalleProducto from './pages/DetalleProducto';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <div style={{ 
        background: 'radial-gradient(circle at top, #0f172a 0%, #020617 100%)', 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        fontFamily: '"JetBrains Mono", "Fira Code", monospace',
        color: '#f8fafc'
      }}>
        
        {/* Barra de Navegación SPA con efecto Cristal Esmerilado */}
        <nav style={{ 
          background: 'rgba(30, 41, 59, 0.7)', 
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          padding: '20px', 
          display: 'flex', 
          gap: '40px', 
          justifyContent: 'center',
          borderBottom: '1px solid rgba(0, 242, 254, 0.2)',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)'
        }}>
          <Link to="/" style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px', letterSpacing: '2px', transition: 'all 0.3s' }}>[ SYSTEM_CORE ]</Link>
          <Link to="/catalogo" style={{ color: '#00f2fe', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px', letterSpacing: '2px', textShadow: '0 0 10px rgba(0,242,254,0.4)' }}>[ HARDWARE_GRID ]</Link>
          <Link to="/contacto" style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px', letterSpacing: '2px' }}>[ ENCRYPTED_CONTACT ]</Link>
        </nav>

        {/* Área de Visualización Central */}
        <main style={{ flex: '1', padding: '40px 20px', maxWidth: '1200px', width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/productos/:id" element={<DetalleProducto />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <footer style={{ 
          textAlign: 'center', 
          padding: '20px', 
          background: 'rgba(2, 6, 23, 0.8)', 
          fontSize: '11px', 
          color: '#475569',
          borderTop: '1px solid rgba(51, 65, 85, 0.5)',
          letterSpacing: '1px'
        }}>
          SECURE_TERMINAL_CONNECTED // LOCALHOST:5173 // © 2026 - SENATI CFP Huaraz
        </footer>
      </div>
    </Router>
  );
}

export default App;
