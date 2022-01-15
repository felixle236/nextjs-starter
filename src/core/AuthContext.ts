import { Auth } from '@app/models/Auth';
import { Client } from '@app/models/Client';
import { Manager } from '@app/models/Manager';
import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export interface AuthContextValue {
  token?: string;
  auth?: Auth;
  profile?: Client | Manager;
  setAuth: Dispatch<SetStateAction<Auth | undefined>>;
  setProfile: Dispatch<SetStateAction<Client | Manager | undefined>>;
}

const AuthContext = createContext({} as AuthContextValue);
AuthContext.displayName = 'AuthContext';

export const useAuthContext = () => useContext(AuthContext);
export default AuthContext;
