import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import Home from "../components/subpages/Home";
import Login from "../components/subpages/Login";
import Register from "../components/subpages/Register";
import PokemonDetails from "../components/subpages/PokemonDetails";
import Favourites from "../components/subpages/Favourites";
import Arena from "../components/subpages/Arena";
import Ranking from "../components/subpages/Ranking";
import Edit from "../components/subpages/Edit";
import EditPokemon from "../components/subpages/EditPokemon";
import CreatePokemon from "../components/subpages/CreatePokemon";

const AppRouter = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:id" element={<PokemonDetails />} />

      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      <Route
        path="/register"
        element={!user ? <Register /> : <Navigate to="/" />}
      />

      <Route
        path="/favourites"
        element={user ? <Favourites /> : <Navigate to="/login" />}
      />
      <Route
        path="/arena"
        element={user ? <Arena /> : <Navigate to="/login" />}
      />
      <Route
        path="/ranking"
        element={user ? <Ranking /> : <Navigate to="/login" />}
      />
      <Route
        path="/edit"
        element={user ? <Edit /> : <Navigate to="/login" />}
      />
      <Route
        path="/edit/create"
        element={user ? <CreatePokemon /> : <Navigate to="/login" />}
      />
      <Route
        path="/edit/:id"
        element={user ? <EditPokemon /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export default AppRouter;
