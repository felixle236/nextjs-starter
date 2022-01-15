import { AuthGuard } from '@common/AuthGuard';
import { RoleId } from '@app/enums/RoleId';
import { Auth } from '@app/models/Auth';
import { Routes } from '@constants/Routes';
import { useAuthContext } from '@core/AuthContext';
import { useRouter } from 'next/router';
import { FunctionComponent, ReactNode, useEffect } from 'react';

interface Props {
  children: ReactNode;
  guard?: AuthGuard;
}

function checkAuthGuard(guard?: AuthGuard, auth?: Auth) {
  if (
    guard &&
    ((guard.allowAuth && !auth) ||
      (guard.disallowAuth && auth) ||
      (guard.allowAuth &&
        auth &&
        ((guard.roleIds?.length && !guard.roleIds.includes(auth.roleId as RoleId)) || (guard.excludeRoleIds?.length && guard.excludeRoleIds.includes(auth.roleId as RoleId)))))
  ) {
    return false;
  }
  return true;
}

const Guard: FunctionComponent<Props> = ({ children, guard }) => {
  const router = useRouter();
  const { auth } = useAuthContext();
  const allowAccess = checkAuthGuard(guard, auth);

  useEffect(() => {
    if (!allowAccess) {
      const redirect = guard?.redirect ?? Routes.Signin;
      router.push(redirect);
    }
  });

  return <>{allowAccess ? children : 'Loading...'}</>;
};

export default Guard;
