import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';

import AuthContext from '../app/auth/context';

import ViewImageScreen from '../app/screens/ViewImageScreen';
import WelcomeScreen from '../app/screens/WelcomeScreen';
import ItemsList from '../app/components/ItemsList';
import ListingDetailsScreen from '../app/screens/ListingDetailsScreen';
import Screen from '../app/components/Screen';
import Icon from '../app/components/Icon';
import ListItem from '../app/components/ListItem';
import AccountScreen from '../app/screens/AccountScreen';
import ListingsScreen from '../app/screens/ListingsScreen';
import AuthNavigator from '../app/navigation/AuthNavigator';
import navigationTheme from '../app/navigation/navigationTheme';
import AppNavigator from '../app/navigation/AppNavigator';
import OfflineNotice from '../app/components/OfflineNotice';
import authStorage from '../app/auth/storage';
import { navigationRef } from '../app/navigation/rootNavigation';

export default function Exercise() {
	const [user, setUser] = useState();
	const [isAppReady, setIsAppReady] = useState(false);

	const restoreUserAsync = async () => {
		const user = await authStorage.getUserAsync();
		if (user) setUser(user);
	};

	if (!isAppReady) {
		return (
			<AppLoading
				startAsync={restoreUserAsync}
				onFinish={() => setIsAppReady(true)}
				onError
			/>
		);
	}

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			<OfflineNotice />
			<NavigationContainer ref={navigationRef} theme={navigationTheme}>
				{user ? <AppNavigator /> : <AuthNavigator />}
			</NavigationContainer>
		</AuthContext.Provider>
	);
}
