import styled from "styled-components";

export const H1 = styled.h1`
  font-family: "Oakes Grotesk", sans-serif !important;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  position: relative;
  text-align: center;
  justify-content: center;
`;
export const SearchInput = styled.input`
  border-radius: 25px;
  height: 50px;
  padding: 20px;
  min-width: 300px;
  box-sizing: border-box;
`;

export const SearchButton = styled.button`
  background: black;
  color: white;
  position: absolute;
  right: 0;
  top: 0;
  height: 35px;
  width: 90px;
  border: none;
  border-radius: 25px;
  margin: 0.5em;
`;
