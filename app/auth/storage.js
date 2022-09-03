import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

const key = 'authToken';
const storeTokenAsync = async (authToken) => {
	try {
		await SecureStore.setItemAsync(key, authToken);
	} catch (error) {
		console.log('Error storing the auth token', error);
	}
};

const getTokenAsync = async () => {
	try {
		return await SecureStore.getItemAsync(key);
	} catch (error) {
		console.log('Error getting the auth token', error);
	}
};

const getUserAsync = async () => {
	const token = await getTokenAsync();
	return token ? jwtDecode(token) : null;
};

const removeTokenAsync = async () => {
	try {
		await SecureStore.deleteItemAsync(key);
	} catch (error) {
		console.log('Error removing the auth token', error);
	}
};

export default {
	getUserAsync,
	storeTokenAsync,
	removeTokenAsync,
	getTokenAsync,
};
