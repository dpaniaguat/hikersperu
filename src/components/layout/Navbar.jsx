import './sass/Navbar.scss';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li>
          <a href="">Mejores Ofertas</a>
          <span></span>
        </li>
        <li>
          <a href="">Nuestros Tours</a>
          <span></span>
        </li>
        <li>
          <a href="">Experiencias</a>
          <span></span>
        </li>
        <li>
          <a href="">Blog</a>
          <span></span>
        </li>
        <li>
          <a href="">¿Quiénes Somos?</a>
          <span></span>
        </li>
        <li>
          <a href="">Contáctenos</a>
          <span></span>
        </li>
      </ul>
    </nav>
  );
};
