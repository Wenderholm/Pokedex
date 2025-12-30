import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { SnackbarProvider } from "notistack";
import App from "./App";
import "./App.css";
// import s
import { ArenaProvider } from "./context/ArenaContext.jsx";
import { FavouritesProvider } from "./context/FavouritesContext.jsx";
import { PokemonsProvider } from "./context/PokemonsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PokemonsProvider>
        <FavouritesProvider>
          <ArenaProvider>
            <SnackbarProvider maxSnack={3}>
              <AuthProvider>
                <App />
              </AuthProvider>
            </SnackbarProvider>
          </ArenaProvider>
        </FavouritesProvider>
      </PokemonsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
