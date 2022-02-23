import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { AuthGuard } from '@app/common/AuthGuard';
import BlankLayout from '@components/layout/blank/BlankLayout';
import { Routes } from '@constants/Routes';
import { useAuthContext } from '@contexts/AuthContext';

export default function SignOut() {
  const router = useRouter();
  const { clearUserAuthenticated } = useAuthContext();

  useEffect(() => {
    clearUserAuthenticated();
    router.push(Routes.Index);
  });

  return <>Loading...</>;
}

SignOut.layout = BlankLayout;

SignOut.guard = {
  allowAuth: true,
  redirect: Routes.Index,
} as AuthGuard;
