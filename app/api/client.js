import { create } from 'apisauce';
import cache from '../utility/cache';
import authStorage from '../auth/storage';

const apiClient = create({
	baseURL: 'https://react-native-tutorial-backend.herokuapp.com/api',
	// baseURL: 'http://localhost:5000',
});

apiClient.addAsyncRequestTransform(async (request) => {
	const authToken = await authStorage.getTokenAsync();
	if (!authToken) return;
	request.headers['x-auth-token'] = authToken;
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
	const response = await get(url, params, axiosConfig);

	if (response.ok) {
		cache.storeAsync(url, response.data);
		return response;
	}

	const data = await cache.getAsync(url);
	return data ? { ok: true, data } : response;
};

export default apiClient;
