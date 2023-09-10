import { Navigate } from "react-router-dom";
import { useGetUserInfo } from "../hooks/useGetUserInfo";

const ProtectedRoute = ({ children }) => {
  const { userID } = useGetUserInfo();

  if (!userID) return <Navigate to="/" />;
  return children;
};

export default ProtectedRoute;
