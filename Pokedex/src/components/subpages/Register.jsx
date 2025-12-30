import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSnackbar } from "notistack";
import { useNavigate, Link } from "react-router-dom";
import {
  FormContainer,
  FormTitle,
  FormDescription,
  StyledForm,
  FormField,
  StyledInput,
  ErrorMessage,
  SubmitButton,
  FormLink,
} from "../forms/Form.styled";

const schema = z
  .object({
    name: z.string().min(3, { message: "Imię musi mieć co najmniej 3 znaki" }),
    email: z.string().email({ message: "Podaj prawidłowy email" }),
    password: z
      .string()
      .min(8, { message: "Hasło musi mieć co najmniej 8 znaków" })
      .regex(/[A-Z]/, {
        message: "Hasło musi zawierać co najmniej jedną wielką literę",
      })
      .regex(/[0-9]/, {
        message: "Hasło musi zawierać co najmniej jedną cyfrę",
      })
      .regex(/[^A-Za-z0-9]/, {
        message: "Hasło musi zawierać co najmniej jeden znak specjalny",
      }),
    repeatPassword: z.string(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    path: ["repeatPassword"],
    message: "Hasła muszą być identyczne",
  });

const Register = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  // useForm → zarządza stanem formularza
  // resolver: zodResolver(schema) → integracja z Zod, żeby walidować dane zgodnie
  // z ustalonym schematem (np. email, password, min. długość itp.)
  // register → przypisuje inputy formularza do React Hook Form
  // handleSubmit → obsługuje submit i walidację
  // errors → zawiera błędy walidacji, które możesz pokazać w UI
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
        `http://localhost:3001/users?email=${data.email}`
      );
      const users = await res.json();

      if (users.length > 0) {
        enqueueSnackbar("Użytkownik już istnieje", { variant: "error" });
        return;
      }

      await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      });

      enqueueSnackbar("Konto utworzone pomyślnie!", { variant: "success" });
      navigate("/login");
    } catch {
      enqueueSnackbar("Błąd podczas rejestracji", { variant: "error" });
    }
  };

  return (
    <FormContainer>
      <FormTitle>Rejestracja Trenera</FormTitle>
      <FormDescription>Dołącz do świata Pokemonów</FormDescription>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <StyledInput placeholder="Imię trenera" {...register("name")} />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </FormField>

        <FormField>
          <StyledInput
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </FormField>

        <FormField>
          <StyledInput
            type="password"
            placeholder="Hasło"
            {...register("password")}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </FormField>

        <FormField>
          <StyledInput
            type="password"
            placeholder="Powtórz hasło"
            {...register("repeatPassword")}
          />
          {errors.repeatPassword && (
            <ErrorMessage>{errors.repeatPassword.message}</ErrorMessage>
          )}
        </FormField>

        <SubmitButton type="submit">Zarejestruj się</SubmitButton>
      </StyledForm>

      <FormLink>
        Masz już konto? <Link to="/login">Zaloguj się</Link>
      </FormLink>
    </FormContainer>
  );
};

export default Register;
