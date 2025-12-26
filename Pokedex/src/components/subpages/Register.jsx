import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

// informacje o bledach sa generowane automatycznie przez zod albo mozna je zdefiniowac samemu przez message
const schema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Name must be at least 3 characters long" }),
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number" })
      .regex(/[^A-Za-z0-9]/, {
        message: "Password must contain at least one special character",
      }),
    repeatPassword: z.string(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    path: ["repeatPassword"],
    message: "Passwords must match",
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
    // Sprawdzenie, czy użytkownik już istnieje
    const res = await fetch(`http://localhost:3001/users?email=${data.email}`);
    // zwroci nam uzytkownika o podanym emailu jezeli jest jezeli nie to pustą tablice
    const users = await res.json();
    // jezeli tablica jest niepusta to znaczy ze uzytkownik istnieje
    if (users.length > 0) {
      enqueueSnackbar("User already exists", { variant: "error" });
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
    // komunikat o sukcesie
    enqueueSnackbar("Account created!", { variant: "success" });
    // przekierowanie po rejestracji do logowania
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Name" {...register("name")} />
      <p>{errors.name?.message}</p>

      <input placeholder="Email" {...register("email")} />
      <p>{errors.email?.message}</p>

      <input type="password" placeholder="Password" {...register("password")} />
      <p>{errors.password?.message}</p>

      <input
        type="password"
        placeholder="Repeat password"
        {...register("repeatPassword")}
      />
      <p>{errors.repeatPassword?.message}</p>

      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
