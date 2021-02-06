import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import Login from 'components/Auth/Login';

const LoginPage: NextPage = () => (
  <>
    <Head>
      <title>Login{process.env.TITLE_SUFFIX}</title>
    </Head>
    <Login />
  </>
);

export default LoginPage;
