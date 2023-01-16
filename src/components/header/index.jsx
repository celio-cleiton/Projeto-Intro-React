import React from "react";
import {
  StyledHeader,
  StyledInput,
  StyledLi,
  StyledNavbar,
  StyledUl,
  StyledA,
} from "./styles";

function Header(props) {
  const handleSearchName = (e) => {
    props.setPesquisa(e.target.value);
  };

  return (
    <StyledHeader>
      <StyledNavbar>
        <StyledUl>
          <StyledLi>
            <StyledA href="#logo">
              <img src="src\assets\react.svg" alt="logo" />
              Loja
            </StyledA>
          </StyledLi>
          <select>
            <option value="valor1">Valor 1</option>
            <option value="valor2" >
              Valor 2
            </option>
            <option value="valor3">Valor 3</option>
          </select>
          <StyledInput
            type="text"
            value={props.pesquisa}
            onChange={handleSearchName}
            placeholder="Search.."
          />
          <div onClick={() => props.mudarTela(2)}>
            Carrinho
            <div className="sub">Rs 0.0</div>
          </div>
        </StyledUl>
      </StyledNavbar>
    </StyledHeader>
  );
}

export default Header;
