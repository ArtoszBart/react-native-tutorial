import { useState } from 'react';

const useApi = (apiFunc) => {
	const [data, setData] = useState([]);
	const [hasError, setHasError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	// linstings.js const getListings = () => client.get(endpoint);
	const requestAsync = async (...args) => {
		setIsLoading(true);
		const response = await apiFunc(...args);
		setIsLoading(false);

		setHasError(!response.ok);
		setData(response.data);

		return response;
	};

	return { requestAsync, data, hasError, isLoading };
};

export default useApi;
