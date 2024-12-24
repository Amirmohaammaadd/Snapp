import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const clientReact = new QueryClient({
  defaultOptions: {
    queries: {
      // refetchInterval: 5000,
      // staleTime: 5000,
      enabled: false,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <QueryClientProvider client={clientReact}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
);
