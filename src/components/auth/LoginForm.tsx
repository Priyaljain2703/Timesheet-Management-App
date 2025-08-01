'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
        remember: rememberMe,
    });

    if (res?.ok) {
      router.push('/dashboard');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <p className="text-sm text-red-500">{error}</p>}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-black">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-black">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <label className="flex items-center text-sm text-gray-600">
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
          className="mr-2"
        />
        Remember me
      </label>

      <button
        type="submit"
        className="w-full rounded-md bg-[#1A56DB] py-2 text-white hover:bg-[#1a57dbf1] transition"
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
