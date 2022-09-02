import { create } from 'apisauce';

const apiClient = create({
	baseURL: 'https://react-native-tutorial-backend.herokuapp.com/api',
	// baseURL: 'http://localhost:5000',
});

export default apiClient;
