import React from "react";
import { useState } from "react";
import styled from 'styled-components'

const FormDiv = styled.div`
    margin-top: 1em;
`
const Label = styled.label`
display: inline-block;
    width: 90px;
    text-align: right;
`
const Textarea = styled.textarea`
font: 1em sans-serif;
width: 300px;
-moz-box-sizing: border-box;
box-sizing: border-box;
border: 1px solid #999;
`
const Button =  styled.button`
  margin-left: .5em;
`

const MensagemEnviar = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  // const [mensagemEnviada, setMensagemEnviada] = useState("false");

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
    // setMensagemEnviada("true");
    // console.log(mensagemEnviada);
  };

  const onReset = () => {
    setNome("");
    setEmail("");
    setMensagem("");
    // setMensagemEnviada("false");
    // console.log(mensagemEnviada);
  };

    return (
      <div>
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
            <Button type="submit">Enviar</Button>
            <Button type="reset">reset</Button>
          </form>
        </FormDiv>
      </div>
    ); 
    
};

export default MensagemEnviar;
