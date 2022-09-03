import client from './client';

const register = (pushToken) => {
	return client.post('/expoPushTokens', { token: pushToken.data });
};

export default {
	register,
};
