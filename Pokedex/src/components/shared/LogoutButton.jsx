import { useAuth } from "../../context/AuthContext";
import { Button } from "./Button.styled";

const LogoutButton = ({ children }) => {
  const { logout } = useAuth();

  return (
    <Button
      onClick={() => {
        logout();
      }}
    >
      {children}
    </Button>
  );
};

export default LogoutButton;
