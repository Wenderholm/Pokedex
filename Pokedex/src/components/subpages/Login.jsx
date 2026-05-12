import { useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { z } from "zod";
import {
  FormContainer,
  FormTitle,
  StyledForm,
  FormField,
  StyledInput,
  SubmitButton,
  ErrorMessage,
  FormLink,
} from "../forms/Form.styled";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email({ message: "Podaj prawidłowy email" }),
  password: z
    .string()
    .min(8, { message: "Hasło musi mieć co najmniej 8 znaków" }),
});

const Login = () => {
  const { login } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await fetch(
        `http://localhost:3001/users?email=${data.email}&password=${data.password}`,
      );
      const users = await res.json();

      if (users.length === 0) {
        enqueueSnackbar("Nieprawidłowe dane logowania", { variant: "error" });
        return;
      }

      login(users[0]);
      enqueueSnackbar("Zalogowano pomyślnie!", { variant: "success" });
      navigate("/");
    } catch {
      enqueueSnackbar("Błąd podczas logowania", { variant: "error" });
    }
  };

  return (
    <FormContainer>
      <FormTitle>Logowanie do Pokedex</FormTitle>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <StyledInput
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </FormField>

        <FormField>
          <StyledInput
            type="password"
            placeholder="Hasło"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </FormField>

        <SubmitButton type="submit">Zaloguj się</SubmitButton>
      </StyledForm>

      <FormLink>
        Nie masz konta? <Link to="/register">Zarejestruj się</Link>
      </FormLink>
    </FormContainer>
  );
};

export default Login;
