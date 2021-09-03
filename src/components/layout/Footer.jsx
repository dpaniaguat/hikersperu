import React from "react";
import "./sass/Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_elements">
        <div className="footer__element">
          <h3>Datos Del Contacto</h3>
          <div className="footer__element--item">
            <i>I</i> <span>989 339 833</span>
          </div>
          <div className="footer__element--item">
            <i>I</i> <span>hikersperu.travel@gmail.com</span>
          </div>
          <div className="footer__element--item">
            <i>I</i> <span>Lunes a Viernes (9:30 a 18:00) </span>
          </div>
          <div className="footer__element--item">
            <span>Sábados (9:30 a 18:00)</span>
          </div>
          <div className="footer__element--item">
            <i>I</i> <span>Siguenos en:</span>
          </div>
        </div>

        <div className="footer__element">
          <h3>Atención al Cliente</h3>
          <div className="footer__element--item">
            <i>I</i> <span>989 339 833</span>
          </div>
          <div className="footer__element--item">
            <i>I</i> <span>989 339 833</span>
          </div>
          <div className="footer__element--item">
            <i>I</i> <span>989 339 833</span>
          </div>
          <div className="footer__element--item">
            <i>I</i> <span>989 339 833</span>
          </div>
        </div>

        <div className="footer__element">
          <h3>Ayuda</h3>
          <div className="footer__element--item">
            <i>I</i> <span>989 339 833</span>
          </div>
          <div className="footer__element--item">
            <i>I</i> <span>989 339 833</span>
          </div>
          <div className="footer__element--item">
            <i>I</i> <span>989 339 833</span>
          </div>
          <div className="footer__element--item">
            <i>I</i> <span>989 339 833</span>
          </div>
        </div>

        <div className="footer__element">
          <h3>Acerca de Nosotros</h3>
          <div className="footer__element--item">
            <i>I</i> <span>989 339 833</span>
          </div>
          <div className="footer__element--item">
            <i>I</i> <span>989 339 833</span>
          </div>
          <div className="footer__element--item">
            <i>I</i> <span>989 339 833</span>
          </div>
          <div className="footer__element--item">
            <i>I</i> <span>989 339 833</span>
          </div>
        </div>
        <div className="footer__element">
          <figure>
            <img
              src="https://storage.googleapis.com/sspe-rscs-prod-cont/00000B2A/es-PE/images/logo/3a87f3b8-c98d-4d35-bef2-ea755e2eecf8.png"
              alt=""
            />
          </figure>
        </div>
      </div>
      <div className="footer__reserved">
        <span>Hikers Perú © 2021 - Todos los Derechos Reservados</span>
      </div>
    </footer>
  );
};
