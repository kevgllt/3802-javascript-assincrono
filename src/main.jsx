import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Global, css } from '@emotion/react'

const globalStyles = css`
  html {
    /* Define o tamanho da fonte raiz para 62.5%.
      Cálculo: 16px (padrão do navegador) * 62.5% = 10px.
      Agora, 1rem = 10px em toda a aplicação.
    */
    font-size: 62.5%;

    /* Opcional, mas recomendado: Melhorar o box-sizing padrão */
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    /* Define um tamanho de fonte base para o corpo, se necessário (ex: 1.6rem = 16px) */
    font-size: 1.6rem;
    line-height: 1.5;
  }
`;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Global styles={globalStyles} />
    <App />
  </StrictMode>,
)
