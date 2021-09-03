import { Container } from "./components/layout/Container";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import HeaderCinta from "./components/layout/HeaderCinta";
import Layout from "./components/layout/Layout";
import { Navbar } from "./components/layout/Navbar";
import { Search } from "./components/layout/Search";
import { Sidebar } from "./components/layout/Sidebar";
import { UserSession } from "./components/layout/UserSession";


function HikersPeruApp() {
  return (
    <div className="app_wrapper">
      <HeaderCinta />
      <Header />
      <UserSession/>
      <Navbar />
      <Search /> 
      <Sidebar />
      <Container />
      <Footer />

    </div>
  );
}

export default HikersPeruApp;
