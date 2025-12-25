import { useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch(
      `http://localhost:3001/users?email=${data.email}&password=${data.password}`
    );
    const users = await res.json();

    if (users.length === 0) {
      enqueueSnackbar("Invalid credentials", { variant: "error" });
      return;
    }

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
