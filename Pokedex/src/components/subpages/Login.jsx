import { useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  // elementy i funkcje z react-hook-form
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    // wysylanie zapytania do serwera w celu weryfikacji danych logowania
    const res = await fetch(
      `http://localhost:3001/users?email=${data.email}&password=${data.password}`
    );
    const users = await res.json();
    // jezeli nie ma uzytkownika o podanych danych logowania
    if (users.length === 0) {
      enqueueSnackbar("Invalid credentials", { variant: "error" });
      return;
    }
    // jezeli znaleziono uzytkownika o podanych danych logowania to logujemy go
    login(users[0]);
    enqueueSnackbar("Logged in!", { variant: "success" });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Email" {...register("email")} />
      <input type="password" placeholder="Password" {...register("password")} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
