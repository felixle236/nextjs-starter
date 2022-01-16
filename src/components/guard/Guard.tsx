import { useRouter } from 'next/router';
import { FunctionComponent, ReactNode, useEffect } from 'react';
import { RoleId } from '@app/enums/RoleId';
import { Auth } from '@app/models/Auth';
import { AuthGuard } from '@common/AuthGuard';
import { Routes } from '@constants/Routes';
import { useAuthContext } from '@core/AuthContext';

interface Props {
  children: ReactNode;
  guard?: AuthGuard;
}

function checkGuardAccess(guard?: AuthGuard, auth?: Auth) {
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

  useEffect(() => {
    const allowAccess = checkGuardAccess(guard, auth);
    if (!allowAccess) {
      const redirect = guard?.redirect ?? Routes.Signin + `?redirect=${router.asPath}`;
      router.push(redirect);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [guard]);

  const allowAccess = checkGuardAccess(guard, auth);
  return <>{allowAccess ? children : 'Loading...'}</>;
};

export default Guard;
