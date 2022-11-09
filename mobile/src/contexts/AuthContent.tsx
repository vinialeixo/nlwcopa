import { createContext, ReactNode } from "react";
import * as Google from "expo-auth-session/providers/google";
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

interface UserProps {
  name: string;
  avatarUrl: string;
}
export interface authContextDataProps {
  user: UserProps;
  signIn: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as authContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  Google.useAuthRequest({
    clientId:
      "360556702377-uqpmkv79j0v265hbp71lud9ndovfi1ml.apps.googleusercontent.com",
    redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
  });

  console.log();

  async function signIn() {
    console.log("vamos logar!");
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user: {
          name: "Vinicius Dias",
          avatarUrl: "https://github.com/vinialeixo.png",
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
