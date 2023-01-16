import React from "react";
import { CardContainer, StyledImagem } from "./styled";




function Carrinho(props) {
  

  return (
    <div>
      <h1>Carrinho</h1>
        {props.carrinho.map((produto, index) => ( <CardContainer key={index}>
          <StyledImagem src={produto.imageUrl} alt="imagem dos produtos" />
          <h1>{produto.name}</h1>
          <p>{produto.type}</p>
          <p>${produto.price},00</p>
          <p><button type="submit">Remover</button></p>
          </CardContainer>
        ))}
        <div>Valor Total:</div>
    </div>
  );
}

export default Carrinho;


            
