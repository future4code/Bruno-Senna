import React, { useState } from "react";
import MensagemEnviar from "../mensagemEnviar";
import MensagemFoiEnviada from "../mensagemFoiEnviada/index";
import styled from "styled-components";

const Mensagem = styled.div`
  background: #333;
  padding: 10px 0;
  color: #fff;
  margin: 2% 0% 1% 10%;
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 1em;
`;
const FormDiv = styled.div`
  margin-top: 1em;
`;
const Label = styled.label`
  display: inline-block;
  width: 90px;
  text-align: right;
`;
const Textarea = styled.textarea`
  font: 1em sans-serif;
  width: 300px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #999;
`;
const Button = styled.button`
  margin-left: 0.5em;
`;
const Contato = () => {
  const [mensagemEnviada, setMensagemEnviada] = useState("false");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const formValid =
      nome.length > 0 &&
      /(.+)@(.+){2,}.(.+){2,}/.test(email) &&
      mensagem.length > 0;
    if (!formValid) {
      return;
    }
    if (!localStorage.getItem("mensagens")) {
      localStorage.setItem("mensagens", JSON.stringify([]));
    }
    const mensagens = JSON.parse(localStorage.getItem("mensagens"));
    mensagens.push({
      nome,
      email,
      mensagem,
    });
    localStorage.setItem("mensagens", JSON.stringify(mensagens));
  };

  const onReset = () => {
    setNome("");
    setEmail("");
    setMensagem("");
  };

  const renderizarContato = () => {
    if (mensagemEnviada) {
      return (
        <FormDiv>
          <form onSubmit={submit} onReset={onReset}>
            <FormDiv>
              <Label>Nome</Label>
              <input value={nome} onChange={(e) => setNome(e.target.value)} />
            </FormDiv>
            <FormDiv>
              <Label>Email</Label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormDiv>
            <FormDiv>
              <Label>Mensagem</Label>
              <Textarea
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              ></Textarea>
            </FormDiv>
            <Button type="submit" onClick={enviarMensagem}>
              Enviar
            </Button>
            <Button type="reset" onClick={resetarMensagem}>
              Resetar
            </Button>
          </form>
        </FormDiv>
      );
    }
    return (
      <div>
        <MensagemFoiEnviada />
        <Button type="reset" onClick={resetarMensagem}>
        Resetar
        </Button>
      </div>
    );
  };

  const enviarMensagem = () => {
    const mensagemAtual = mensagemEnviada;
    if (mensagemAtual) {
      setMensagemEnviada(!mensagemAtual);
    }
  };

  const resetarMensagem = () => {
    setMensagemEnviada("false");
  };

  return <Mensagem>{renderizarContato()}</Mensagem>;
};

export default Contato;
