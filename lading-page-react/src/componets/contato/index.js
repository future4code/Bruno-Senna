import React, { useState } from "react";
import MensagemEnviar from "../mensagemEnviar";
import MensagemFoiEnviada from "../mensagemFoiEnviada/index";
import styled from 'styled-components'

const Mensagem = styled.div`
  background: #333;
  padding: 10px 0;
  color: #fff;
  margin: 2% 0% 1% 10%;
  width: 400px;
  /* padding: 1em; */
  border: 1px solid #CCC;
  border-radius: 1em;
`

const Contato = () => {
  const [mensagemEnviada, setMensagemEnviada] = useState("false");

  const renderizarContato = () => {
    if (mensagemEnviada) {
      return <MensagemEnviar />;
    }
    return <MensagemFoiEnviada />;
  };

  const enviarMensagem = () => {
    const mensagemAtual = mensagemEnviada;
    if (mensagemAtual) {
      setMensagemEnviada(!mensagemAtual);
    }
  };

  const resetarMensagem = () => {
    setMensagemEnviada("false")
  };

  return (
    <Mensagem>
      {renderizarContato()}
      <button onClick={enviarMensagem}>Enviar</button>
      <button onClick={resetarMensagem}>Reset</button>
    </Mensagem>
  );
};

export default Contato;
