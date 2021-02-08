import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { auth } from 'lib/auth';
import {
  Card,
  ErrorMessage,
  Input,
  Label,
  Logo,
  LogoWrapper,
  Wrapper,
  SubmitButton,
} from './Login.styles';

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    password: '',
  });
  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const { push } = useRouter();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    setError('');
    setSubmitting(true);
    try {
      const { user } = await auth.signInWithEmailAndPassword(
        formValues.email,
        formValues.password
      );

      await push('/');
      if (!user) {
        throw new Error('User not found');
      }
    } catch (err) {
      setError(
        err.code === 'auth/user-not-found'
          ? 'E-mail/password combination is wrong.'
          : err.message
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Wrapper>
      <Card>
        <LogoWrapper>
          <Link href="/" passHref>
            <a title="Home">
              <Logo src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" />
            </a>
          </Link>
        </LogoWrapper>

        <form onSubmit={handleSubmit}>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Label htmlFor="email">E-mail</Label>
          <Input
            onChange={handleChange}
            name="email"
            type="email"
            autoComplete="off"
            required
          />

          <Label htmlFor="password">Password</Label>
          <Input
            onChange={handleChange}
            name="password"
            type="password"
            required
          />

          <SubmitButton type="submit" disabled={isSubmitting}>
            Login
          </SubmitButton>
        </form>
      </Card>
    </Wrapper>
  );
};

export default Login;
