import React,{ useState, useEffect } from "react";
import GlobalStyle  from "./globalStyles";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Carrinho from "./components/carrinho";
import produtos from "./produtos/produtos.json"




function App() {
  const [valorCondicional, setValorCondicional] = useState(1);
  const [adicionarProdutos, setAdicionarProduto] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  const produtosFiltrados = produtos
  .filter((produto) => produto.name.includes(pesquisa))
  console.log(produtosFiltrados)

  const mudarTela = (valor) => {
    setValorCondicional(valor);
  };


  const renderizaTela = () => {
    switch (valorCondicional) {
      case 1:
        return <Main mudarTela={mudarTela} setAdicionarProduto={setAdicionarProduto}/>;
      case 2:
        return <Carrinho mudarTela={mudarTela} carrinho={carrinho}/>;
      case 3:  
        return <Header mudarTela={mudarTela} pesquisa={pesquisa} setPesquisa={setPesquisa}/>
    }
  };
  
  // useEffect(() => {
  //   setCarrinho([...carrinho, adicionarProdutos])
   
  // },[adicionarProdutos])
  
  return (
    <>
      <GlobalStyle />
      <Header mudarTela={mudarTela} setPesquisa={setPesquisa} produtosFiltrados={produtosFiltrados}/>
      {renderizaTela()}
      <Footer />
    </>
  );
}

export default App;
