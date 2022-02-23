import { AuthGuard } from '@app/common/AuthGuard';
import BlankLayout from '@components/layout/blank/BlankLayout';
import { Routes } from '@constants/Routes';

export default function SignUp() {
  return (
    <>
      <div>SignUp</div>
    </>
  );
}

SignUp.layout = BlankLayout;

SignUp.guard = {
  disallowAuth: true,
  redirect: Routes.Index,
} as AuthGuard;
