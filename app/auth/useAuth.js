import { useContext } from 'react';
import jwtDecode from 'jwt-decode';

import AuthContext from './context';
import authStorage from './storage';

export default useAuth = () => {
	const { user, setUser } = useContext(AuthContext);

	const logIn = (authToken) => {
		const user = jwtDecode(authToken);
		setUser(user);
		authStorage.storeTokenAsync(authToken);
	};

	const logOut = () => {
		setUser(null);
		authStorage.removeTokenAsync();
	};

	return { user, setUser, logIn, logOut };
};
