import React from "react";
import { footerData } from "../../utils/footerData";
import "./sass/Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_elements">
        {footerData.map((item, i) => (
          <div className="footer__element" key={i}>
            <h3>{item.menu}</h3>
            {item.items.map((option,j) => (
              <ul className="footer__element--item" key={j}>
                <i>{option.icono}</i>
                <a href={option.href}>
                  <span>{option.nombre}</span>
                </a>
              </ul>
            ))}
          </div>
        ))}

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
