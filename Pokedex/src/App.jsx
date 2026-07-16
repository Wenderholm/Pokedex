import Navbar from "./components/shared/Navbar";
import AppRouter from "./router/AppRouter";
import { AppContainer } from "./App.styled";

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <AppRouter />
    </AppContainer>
  );
};

export default App;
