import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "./containers/Layout";
import { GlobalStyle } from "./styles";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <GlobalStyle />
    <Layout />
  </QueryClientProvider>
);
