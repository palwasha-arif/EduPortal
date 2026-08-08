import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext.jsx"; // Fixed relative path

export default function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
}