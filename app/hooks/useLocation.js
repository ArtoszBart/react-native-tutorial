import * as Location from 'expo-location';
import { useState, useEffect } from 'react';

export default useLocation = () => {
	const [location, setLocation] = useState();

	const getLocationAsync = async () => {
		try {
			const { granted } = await Location.requestForegroundPermissionsAsync();
			if (!granted) return;
			const {
				coords: { latitude, longitude },
			} = await Location.getLastKnownPositionAsync();
			setLocation({ latitude, longitude });
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getLocationAsync();
	}, []);

	return location;
};