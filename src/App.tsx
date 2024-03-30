import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "./containers/Layout";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <Layout />
  </QueryClientProvider>
);
