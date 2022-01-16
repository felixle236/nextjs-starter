import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useState } from 'react';
import authService from '@app/services/AuthService';
import { AuthGuard } from '@common/AuthGuard';
import { Routes } from '@constants/Routes';
import { useAuthContext } from '@core/AuthContext';
import { getProfile } from '@utils/Auth';

export default function SignIn() {
  const router = useRouter();
  const { setUserAuthenticated, clearUserAuthenticated } = useAuthContext();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event: ChangeEvent) => {
    const { name, value } = event.target as any;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    try {
      const result = await authService.login(inputs.email, inputs.password, { locale: router.locale });
      const auth = { userId: result.userId, roleId: result.roleId };
      const profile = await getProfile(result.token, result.roleId, router.locale);

      setUserAuthenticated({ token: result.token, auth, profile });
      router.push((router.query.redirect as string) || Routes.Index);
    } catch ({ message }) {
      clearUserAuthenticated();
      alert(message);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input name="email" type="text" value={inputs.email} onChange={handleChange} />
        </label>
        <label>
          Password
          <input name="password" type="password" value={inputs.password} onChange={handleChange} />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </>
  );
}

SignIn.guard = {
  disallowAuth: true,
  redirect: Routes.Index,
} as AuthGuard;
