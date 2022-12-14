import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import AuthContext from './app/auth/context';
import logger from './app/utility/logger';

logger.start();

// SCREENS
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

// LESSONS
import FundamentalsLayouts from './lessons/FundamentalsLayouts';
import StylesLesson from './lessons/StylesLesson';
import ListsLesson from './lessons/ListsLesson';
import InputConponentsLesson from './lessons/InputConponentsLesson';
import NativeFeaturesLesson from './lessons/NativeFeaturesLesson';
import NavigationLesson from './lessons/NavigationLesson';
import OfflineSupportLesson from './lessons/OfflineSupportLesson';

import Exercise from './lessons/Exercise';
import NotificationsLesson from './lessons/NotificationsLesson';

export default function App() {
	// logger.log(new Error('Error in app'));
	return (
		<View style={{ flex: 1 }}>
			<Exercise />
			<StatusBar style='auto' />
		</View>
	);
}
