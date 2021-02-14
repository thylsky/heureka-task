import React, { useCallback } from 'react';
import { auth } from 'lib/auth';

import { HomeLink, Logo, LogoutButton, Wrapper } from './Header.styles';

const Header = () => {
  const handleLogout = useCallback(async () => {
    await auth.signOut();
  }, []);

  return (
    <Wrapper>
      <HomeLink href="/" passHref>
        <a>
          <Logo src="/logo.png" alt="Heureka" width={180} height={40} />
        </a>
      </HomeLink>
      <LogoutButton title="Logout" onClick={handleLogout}>
        Logout
      </LogoutButton>
    </Wrapper>
  );
};

export default Header;
