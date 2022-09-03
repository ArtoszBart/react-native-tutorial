import client from './client';

const login = async (email, password) =>
	client.post('/auth', { email, password });

export default {
	login,
};
