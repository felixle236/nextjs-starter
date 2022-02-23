import { useRouter } from 'next/router';
import { AuthGuard } from '@app/common/AuthGuard';
import { Routes } from '@constants/Routes';
import { useAuthContext } from '@contexts/AuthContext';

export default function Protected() {
  const router = useRouter();
  const { auth, profile } = useAuthContext();

  // If no session exists, display access denied message
  if (!auth || !profile) {
    return (
      <>
        <h1>Access denied</h1>
        Not signed in <br />
        <button onClick={() => router.push(Routes.Signin)}>Sign in</button>
      </>
    );
  }

  // If session exists, display content
  return (
    <>
      <h1>Protected Page</h1>
      Signed in as {profile?.email} <br />
      <button onClick={() => router.push(Routes.Signout)}>Sign out</button>
    </>
  );
}

Protected.guard = {
  allowAuth: true,
  roleIds: [],
} as AuthGuard;
