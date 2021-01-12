import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import App from "./app";

const theme = extendTheme({
  fonts: {
    body: "Roboto",
  },
});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet"
      />
      <title>Summit County Election Results</title>
    </Helmet>
    <App />
  </ChakraProvider>,
  document.body
);
