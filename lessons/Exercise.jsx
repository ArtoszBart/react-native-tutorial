import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import ViewImageScreen from '../app/screens/ViewImageScreen';
import WelcomeScreen from '../app/screens/WelcomeScreen';
import ItemsList from '../app/components/ItemsList';
import ListingDetailsScreen from '../app/screens/ListingDetailsScreen';
import Screen from '../app/components/Screen';
import Icon from '../app/components/Icon';
import ListItem from '../app/components/ListItem';
import AccountScreen from '../app/screens/AccountScreen';
import ListingsScreen from '../app/screens/ListingsScreen';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from '../app/navigation/AuthNavigator';
import navigationTheme from '../app/navigation/navigationTheme';
import AppNavigator from '../app/navigation/AppNavigator';
import OfflineNotice from '../app/components/OfflineNotice';

export default function Exercise() {
	return (
		<>
			<OfflineNotice />
			<NavigationContainer theme={navigationTheme}>
				<AppNavigator />
			</NavigationContainer>
		</>
	);
}
