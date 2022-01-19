import { createContext, Dispatch, SetStateAction, useContext } from 'react';
import { Auth } from '@app/models/Auth';
import { Client } from '@app/models/Client';
import { Manager } from '@app/models/Manager';

export interface AuthContextValue {
  auth?: Auth;
  profile?: Client | Manager;
  setAuth: Dispatch<SetStateAction<Auth | undefined>>;
  setProfile: Dispatch<SetStateAction<Client | Manager | undefined>>;
  setUserAuthenticated: Dispatch<{ auth: Auth; profile: Client | Manager }>;
  clearUserAuthenticated: Dispatch<void>;
}

const AuthContext = createContext({} as AuthContextValue);
AuthContext.displayName = 'AuthContext';

export const useAuthContext = () => useContext(AuthContext);
export default AuthContext;
