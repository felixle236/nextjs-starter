import { useState, useEffect } from 'react';
// import { signIn, signOut, useSession } from 'next-auth/react';
import { useAuthContext } from '@core/AuthContext';
import { useRouter } from 'next/router';
import { AuthGuard } from '@common/AuthGuard';
import { RoleId } from '@app/enums/RoleId';
import { Routes } from '@constants/Routes';

export default function Protected() {
  const router = useRouter();
  const { auth, profile } = useAuthContext();
  const [content, setContent] = useState();

  // Fetch content from protected route
  // useEffect(() => {
  //   setContent(profile);
  // }, [auth]);

  // If no session exists, display access denied message
  if (!auth) {
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
      <p>
        <strong>{content || '\u00a0'}</strong>
      </p>
      Signed in as {profile?.email} <br />
      <button onClick={() => router.push(Routes.Signout)}>Sign out</button>
    </>
  );
}

Protected.guard = {
  allowAuth: true,
  roleIds: [],
} as AuthGuard;
