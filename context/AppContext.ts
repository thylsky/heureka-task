import { createContext } from 'react';

import firebase from 'lib/firebase';

export const AppContext = createContext<{
  user: firebase.User | null;
  userLoading: boolean;
}>({
  user: null,
  userLoading: false,
});

export default AppContext;
