import React, { useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import AddNew from 'components/UI/AddNew';

import { auth } from 'lib/auth';

import { AddNewButton, LogoutButton, Wrapper } from './Header.styles';

const Header = () => {
  const handleLogout = useCallback(async () => {
    await auth.signOut();
  }, []);

  return (
    <Wrapper>
      <Link href="/" passHref>
        <a title="Home">
          <Image src="/logo.png" alt="Heureka" width={180} height={40} />
        </a>
      </Link>
      <Link href="/add" passHref>
        <AddNewButton title="Add New">
          <AddNew height={20} width={20} />
        </AddNewButton>
      </Link>
      <LogoutButton title="Logout" onClick={handleLogout}>
        Logout
      </LogoutButton>
    </Wrapper>
  );
};

export default Header;
