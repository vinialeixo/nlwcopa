import { useContext } from "react";
import { AuthContext, authContextDataProps } from "../contexts/AuthContent";

export function useAuth(): authContextDataProps {
  const context = useContext(AuthContext);

  return context;
}
