import React from "react";
import styled from 'styled-components'

const Header = styled.div`
  width: 100%;
  /* position: fixed; */
  background: #333;
  padding: 10px 0;
  color: #fff;
`
const Nav = styled.div`
  color: #fff;
  padding: 7px 25px;
  display: inline-block;
`
const Link = ({ className, children }) => (
  <a className={className}>
    {children}
  </a>
);

const StyledLink = styled(Link)`
  color: #f8f8f8;
  font-weight: bold;
`

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`

export class Logo extends React.Component {
  render() {
    return (
      <Header>
        <Container>
        <Nav>
          <StyledLink href="responsividade.html"> Início </StyledLink>
          <StyledLink href="#section2"> Produtos </StyledLink>
          <StyledLink href="#section3"> Sobre a empresa </StyledLink>
          <StyledLink href="#section4"> Contatos </StyledLink>
        </Nav>
        </Container>
      </Header>
    );
  }
}
