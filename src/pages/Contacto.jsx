import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Contacto() {
  const esquemaValidacion = Yup.object().shape({
    nombre: Yup.string().min(3, 'Mínimo 3 caracteres exigidos').required('IDENTIFICACIÓN_REQUERIDA'),
    email: Yup.string().email('Dirección de red no válida').required('PROTOCOLO_EMAIL_REQUERIDO'),
    mensaje: Yup.string().min(10, 'Ingrese mayor descripción técnica').required('BLOQUE_DE_TEXTO_VACÍO'),
  });

  const inputsEstilo = {
    width: '100%', 
    padding: '12px', 
    marginTop: '6px', 
    background: 'rgba(15, 23, 42, 0.8)', 
    border: '1px solid rgba(51, 65, 85, 0.8)', 
    borderRadius: '8px', 
    color: '#fff', 
    outline: 'none',
    fontFamily: 'inherit',
    boxSizing: 'border-box'
  };

  return (
    <div style={{ 
      maxWidth: '480px', 
      margin: '40px auto', 
      padding: '30px', 
      background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6), rgba(15, 23, 42, 0.9))',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(244, 63, 94, 0.2)', // Detalle en rojo ciberpunk
      borderRadius: '16px',
      boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
      borderTop: '3px solid #f43f5e'
    }}>
      <h2 style={{ color: '#f43f5e', textAlign: 'center', margin: '0 0 10px 0', letterSpacing: '1px', textShadow: '0 0 10px rgba(244,63,94,0.3)' }}>
        // CANAL_COMUNICACIÓN_SEGURO
      </h2>
      <p style={{ color: '#64748b', fontSize: '12px', textAlign: 'center', marginBottom: '25px' }}>
        Transmisión directa cifrada de extremo a extremo a los servidores en Huaraz.
      </p>

      <Formik
        initialValues={{ nombre: '', email: '', mensaje: '' }}
        validationSchema={esquemaValidacion}
        onSubmit={(valores, { resetForm }) => {
          alert(`[PAQUETE_ENVIADO]: Transmisión completa de ${valores.nombre}.`);
          resetForm();
        }}
      >
        {() => (
          <Form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ color: '#94a3b8', fontSize: '13px', fontWeight: 'bold' }}>OPERADOR_NOMBRE:</label>
              <Field name="nombre" type="text" style={inputsEstilo} placeholder="Ej. Juan Pérez" />
              <ErrorMessage name="nombre" component="div" style={{ color: '#f43f5e', fontSize: '11px', marginTop: '6px', fontWeight: 'bold' }} />
            </div>
            
            <div>
              <label style={{ color: '#94a3b8', fontSize: '13px', fontWeight: 'bold' }}>RED_EMAIL_ADDRESS:</label>
              <Field name="email" type="email" style={inputsEstilo} placeholder="operador@dominio.com" />
              <ErrorMessage name="email" component="div" style={{ color: '#f43f5e', fontSize: '11px', marginTop: '6px', fontWeight: 'bold' }} />
            </div>
            
            <div>
              <label style={{ color: '#94a3b8', fontSize: '13px', fontWeight: 'bold' }}>DESCRIPCIÓN_CONSULTA:</label>
              <Field name="mensaje" as="textarea" rows="4" style={inputsEstilo} placeholder="Escriba su consulta de hardware aquí..." />
              <ErrorMessage name="mensaje" component="div" style={{ color: '#f43f5e', fontSize: '11px', marginTop: '6px', fontWeight: 'bold' }} />
            </div>

            <button type="submit" style={{ 
              background: 'linear-gradient(90deg, #f43f5e, #be123c)', 
              color: 'white', 
              padding: '12px', 
              border: 'none', 
              borderRadius: '8px', 
              cursor: 'pointer', 
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontSize: '13px',
              boxShadow: '0 4px 15px rgba(244, 63, 94, 0.4)',
              marginTop: '10px'
            }}>
              EJECUTAR_TRANSMISIÓN
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Contacto;
