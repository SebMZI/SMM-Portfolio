import { useLocation, Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCurrentToken } from "./authSlice";

const RequiredAuthentification = () => {
  const token = useSelector(selectCurrentToken);
  const location = useLocation();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequiredAuthentification;
