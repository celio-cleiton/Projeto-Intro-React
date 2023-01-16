import React from "react";
import { Container } from "./styled";
import CardProdutos from "../cardprodutos";




function Main(props) {

  return (
    <>
      <Container>
        {/* aqui ele esta adicionando os produtos ao carrinho. */}
        <CardProdutos setAdicionarProduto={props.setAdicionarProduto}/>
      </Container>
    </>
  );
}

export default Main;
