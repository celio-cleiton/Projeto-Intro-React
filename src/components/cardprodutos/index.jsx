import React, { useState } from "react"
import produto from '../../produtos/produtos.json'
import { CardContainer, Container, StyledButton, StyledImagem } from "./styles";

function CardProdutos(props) {
    const [valor, setContador] = useState("");

    const handleContador = (item) => {
        props.setAdicionarProduto(item);
      };

    const listItems = produto.map((item) =>
        <CardContainer key={item.id}>
            <StyledImagem src={item.imageUrl} alt="imagem dos produtos" />
            <h1>{item.name}</h1>
            <p>{item.type}</p>
            <p>${item.price},00</p>
            <p><StyledButton type="submit" onClick={() => handleContador(item)}>Adicionar ao Carrinho</StyledButton></p>
        </CardContainer>
    );
    return (
        <Container>
            {listItems}
        </Container>
    )
}

export default CardProdutos;