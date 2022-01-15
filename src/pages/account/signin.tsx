import authService from '@app/services/AuthService';
import { AuthGuard } from '@common/AuthGuard';
import BlankLayout from '@components/layout/blank/BlankLayout';
import { AuthKey } from '@constants/Common';
import { Routes } from '@constants/Routes';
import { setCookie } from '@utils/Cookie';
import { ChangeEvent, FormEvent, useState } from 'react';

export default function SignIn() {
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
      const token = await authService.login(inputs.email, inputs.password);
      setCookie(AuthKey, token, 24 * 60 * 60);
      location.href = Routes.Index;
    } catch ({ message }) {
      setCookie(AuthKey, '', -1);
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

SignIn.layout = BlankLayout;

SignIn.guard = {
  disallowAuth: true,
  redirect: Routes.Index,
} as AuthGuard;
