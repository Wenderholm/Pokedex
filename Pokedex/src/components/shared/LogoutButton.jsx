import { useAuth } from "../../context/AuthContext";

const LogoutButton = () => {
  const { logout } = useAuth();

  return (
    <button
      style={{ marginLeft: "10px", padding: "5px 10px", borderRadius: "5px" }}
      onClick={() => {
        logout();
      }}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
