import React from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
    const history = useHistory();

    return (
        <div>
          <h1>Home Page</h1>
          <button onClick={() => goToAboutPage(history, "pt")}>
            Fazer Login
          </button>
          <button onClick={() => goToAboutPage(history, "en")}>
            Ir para Sobre EN
          </button>
          <button onClick={() => goToContactsPage(history)}>
            Ir para Contatos
          </button>
        </div>
      );
    };
    
export default HomePage;