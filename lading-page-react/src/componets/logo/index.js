import React from "react";
import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  background: #333;
  padding: 10px 0;
  color: #fff;
`;
const Nav = styled.div`
  color: #fff;
  padding: 7px 25px;
`;
const HeaderLink = styled.a`
  color: #f8f8f8;
  font-weight: bold;
  margin: 1%;
`;
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export class Logo extends React.Component {
  render() {
    return (
      <Header>
        <Container>
          <Nav>
            <HeaderLink href="responsividade.html"> Início </HeaderLink>
            <HeaderLink href="#section2"> Produtos </HeaderLink>
            <HeaderLink href="#section3"> Sobre a empresa </HeaderLink>
            <HeaderLink href="#section4"> Contatos </HeaderLink>
          </Nav>
        </Container>
      </Header>
    );
  }
}
