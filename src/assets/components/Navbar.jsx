import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem", background: "#f4f4f4" }}>
      <div>
        <Link to="/" style={{ marginRight: "1rem", fontWeight: "bold" }}>EduPortal</Link>
        <Link to="/courses">Courses</Link>
      </div>
      <div>
        {currentUser ? (
          <>
            <Link to="/dashboard" style={{ marginRight: "1rem" }}>Dashboard</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ marginRight: "1rem" }}>Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}