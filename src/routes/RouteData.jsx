import Buscador from "../pages/Buscador/Buscador";
import Catalogo from "../pages/Catalogo/Catalogo";
import Contacto from "../pages/Contenido/Contacto";
import Experiencias from "../pages/Contenido/Experiencias";
import QuienesSomos from "../pages/Contenido/QuienesSomos";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Pedidos from "../pages/Pedidos/Pedidos";

export const RouteData = [
  {
    menu: "Mejores Ofertas",
    href: "ofertas",
    rolId: 1,
    exact: true,
    privado: false,
    path: "/ofertas",
    component: Catalogo,
  },
  {
    menu: "Nuestros tours",
    href: "tours",
    rolId: 2,
    exact: true,
    path: "/tours",
    privado: false,
    component: Buscador
  },
  {
    menu: "Experiencias",
    href: "experiencias",
    rolId: 3,
    exact: true,
    privado: false,
    path: "/experiencias",
    component: Experiencias
  },
  {
    menu: "¿Quiénes somos?",
    href: "quienes-somos",
    rolId: 4,
    exact: true,
    path: "/quienes-somos",
    privado: false,
    component: QuienesSomos
  },
  {
    menu: "Contáctenos",
    href: "contactenos",
    rolId: 5,
    exact: true,
    path: "/contactenos",
    privado: false,
    component: Contacto
  },
  {
    menu: "Login",
    href: "login",
    rolId: 6,
    exact: true,
    path: "/login",
    privado: true,
    component: Login
  },
  {
    menu: "Pedidos",
    href: "pedidos",
    rolId: 7,
    exact: true,
    path: "/pedidos",
    privado: true,
    component: Pedidos
  },
];
