//pagina global, melhor pagina para que todas as paginas sigam os estilos

import "./style/global.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
