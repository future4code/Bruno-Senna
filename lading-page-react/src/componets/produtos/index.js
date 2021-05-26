import React from "react";
import styled from "styled-components";

const Products = styled.div`
  background: #333;
  display: flex;
  flex-wrap: wrap;
  padding: 2% 0% 1% 10%;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Input = styled.div`
  background-color: bisque;
  justify-content: center;
  padding: 2% 0% 2% 10%;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: black;
  align-content: space-around;
`;
const InsideProduct = styled.div`
  background: #124;
  padding: 1%;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: white;
`;

export class Produtos extends React.Component {
  state = {
    valorFiltro: "",
    listaProdutos: [
      {
        imagem: "https://picsum.photos/400/410",
        nome: "Produto 1",
      },
      {
        imagem: "https://picsum.photos/400/420",
        nome: "Produto 2",
      },
      {
        imagem: "https://picsum.photos/400/425",
        nome: "Produto 3",
      },
      {
        imagem: "https://picsum.photos/400/426",
        nome: "Produto 4",
      },
    ],
  };

  mudarValorFiltro = (e) => {
    this.setState({ valorFiltro: e.target.value });
  };

  render() {
    const listaFiltrada = this.state.listaProdutos.filter((novaLista) =>
      novaLista.nome.includes(this.state.valorFiltro)
    );

    const listagemProdutos = listaFiltrada.map((product) => {
      return (
        <InsideProduct>
          <img
            src={product.imagem}
            alt="Imagem aleatoria que representa um produto"
          />
          <p>{product.nome}</p>
        </InsideProduct>
      );
    });

    return (
      <Body>
        <Input>
          <label for="input">Filtro</label>
          <input
            id="input"
            type="text"
            value={this.state.valorFiltro}
            onChange={this.mudarValorFiltro}
          />
        </Input>
        <Products>{listagemProdutos}</Products>
      </Body>
    );
  }
}
