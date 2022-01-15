import { AuthGuard } from '@common/AuthGuard';
import BlankLayout from '@components/layout/blank/BlankLayout';
import { AuthKey } from '@constants/Common';
import { Routes } from '@constants/Routes';
import { setCookie } from '@utils/Cookie';
import { useEffect } from 'react';

export default function SignOut() {
  useEffect(() => {
    setCookie(AuthKey, '', -1);
    location.href = Routes.Index;
  });

  return <>Loading...</>;
}

SignOut.layout = BlankLayout;

SignOut.guard = {
  allowAuth: true,
  redirect: Routes.Index,
} as AuthGuard;
