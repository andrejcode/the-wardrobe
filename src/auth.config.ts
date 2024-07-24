import Google from 'next-auth/providers/google';
import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

const providers = [];

providers.push(Google);

if (process.env.NODE_ENV === 'development') {
  providers.push(
    Credentials({
      id: 'password',
      name: 'Password',
      credentials: {
        password: { label: 'Password', type: 'password' },
      },
      authorize: (credentials) => {
        if (credentials?.password === 'password') {
          return {
            email: 'bob@alice.com',
            name: 'Bob Alice',
            image: 'https://avatars.githubusercontent.com/u/67470890?s=200&v=4',
          };
        }
        return null;
      },
    })
  );
}

export default {
  providers,
} satisfies NextAuthConfig;
