import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
#root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Arial', sans-serif;
  padding: 20px;
}
`;
