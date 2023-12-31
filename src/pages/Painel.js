import style from "../css/painel.css";
import AdicionarVisita from "../components/main/AdicionarVisita";
import CadastrarVisitante from "../components/main/CadastrarVisitante";
import AlterarVisitante from "../components/main/AlterarVisitante";
import Header from "../components/structure/Header";
import Navbar from "../components/structure/Navbar";
import Home from "../components/main/Home";
import { useState, useEffect } from "react";
import Modal from "../components/structure/Modal";
import Relatorios from '../components/main/Relatorios';

function Painel() {
  const [activeComponent, setActiveComponent] = useState('home');
  const [pageReloaded, setPageReloaded] = useState(false);

  useEffect(() => {
    if (!pageReloaded) {
      console.log('Página atualizada uma vez.');
      setPageReloaded(true);
    }
  }, [pageReloaded]); 

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="body-Painel">
      <div className="header-Painel">
        <Header />
      </div>

      <div className="main-Painel">
        <div className="top-Section-Painel"></div>
        <div className="mid-Section-Painel">

          {/* COMPONENTES QUE VÃO SER RENDERIZADOS */}
          <Modal />
          {activeComponent === 'home' && <Home />}
          {activeComponent === 'CadastrarVisitante' && <CadastrarVisitante />}
          {activeComponent === 'AdicionarVisita' && <AdicionarVisita />}
          {activeComponent === 'AlterarVisitante' && <AlterarVisitante />}
          {activeComponent === 'Relatorios' && <Relatorios />}
          {/* COMPONENTES QUE VÃO SER RENDERIZADOS */}

        </div>
        <div className="bot-Section-Painel"></div>
      </div>

      <div className="footer-Painel">
        <Navbar onComponentChange={handleComponentChange} />
      </div>
    </div>
  );
}

export default Painel;
