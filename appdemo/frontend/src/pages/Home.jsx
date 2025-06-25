import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.css"; // Asegúrate de que este archivo contenga el CSS que te proporcioné

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>¡Bienvenido a Golgana nein</h1>
        <p>
          Tu plataforma integral para la gestión y reserva de canchas de fútbol. 
          Jugate unos fulbachos, comete unos choriz y tomate unas birras.
        </p>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <div className="feature-icon">🌱</div>
          <h3>Gestión de Canchas</h3>
          <p>
            Administra todas tus canchas desde un solo lugar. 
            Registra su ubicación, características y disponibilidad.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📅</div>
          <h3>Reservas Simplificadas</h3>
          <p>
            Sistema intuitivo para crear y administrar reservas, 
            con notificaciones y confirmaciones automáticas.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Análisis y Reportes</h3>
          <p>
            Obtén datos valiosos sobre el uso de tus predios,
            ocupación y rentabilidad con nuestros reportes personalizados.
          </p>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>Lo que dicen nuestros usuarios</h2>
        
        <div className="testimonial-card">
          <p className="testimonial-text">
            "Golgana transformó completamente la forma en que administramos nuestros terrenos. 
            Ahora tenemos todo organizado y accesible desde cualquier dispositivo."
          </p>
          <p className="testimonial-author">- Pablo Vargas, Crack Total</p>
        </div>
        
        <div className="testimonial-card">
          <p className="testimonial-text">
            "La facilidad para crear reservas y ver la disponibilidad en tiempo real 
            ha hecho que nuestros procesos sean mucho más eficientes."
          </p>
          <p className="testimonial-author">- Daniel Zalazar, otro Crack Total</p>
        </div>
      </section>

      <section className="faq-section">
        <h2>Preguntas frecuentes</h2>
        
        <div className="faq-item">
          <div className="faq-question">¿Cómo puedo registrar un nuevo predio?</div>
          <p className="faq-answer">
            Simplemente inicia sesión en tu cuenta, ve a la sección "Mis Predios" y 
            haz clic en "Agregar nuevo predio". Completa la información requerida y listo.
          </p>
        </div>
        
        <div className="faq-item">
          <div className="faq-question">¿Puedo gestionar múltiples predios desde una sola cuenta?</div>
          <p className="faq-answer">
            ¡Absolutamente! Golgana está diseñado para administrar múltiples predios 
            desde una sola interfaz, facilitando la gestión completa de tus propiedades agrícolas como que agricolas ajajaj.
          </p>
        </div>
        
        <div className="faq-item">
          <div className="faq-question">¿Cómo funciona el sistema de reservas?</div>
          <p className="faq-answer">
            Nuestro sistema permite crear reservas en fechas específicas, 
            verificando automáticamente la disponibilidad y enviando notificaciones 
            tanto al propietario como al solicitante.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Golgana - Sistema de Gestión de Predios Agrícolas</p>
        <p>
          <a href="/terminos">Términos y Condiciones</a> | 
          <a href="/privacidad">Política de Privacidad</a> | 
          <a href="/contacto">Contacto</a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
