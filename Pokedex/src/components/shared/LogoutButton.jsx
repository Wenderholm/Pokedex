import { useAuth } from "../../context/AuthContext";
import { Button } from "./Button.styled";

const LogoutButton = () => {
  const { logout } = useAuth();

  return (
    <Button
      onClick={() => {
        logout();
      }}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
