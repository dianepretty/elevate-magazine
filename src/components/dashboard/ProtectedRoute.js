import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
const ProtectedRoute = ({ element }) => {
  const { user } = useAuth(); // Get authentication status

  return user ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
