import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

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

import Exercise from './lessons/Exercise';

export default function App() {
	return (
		<View style={{ flex: 1 }}>
			<NavigationLesson />
			<StatusBar style='auto' />
		</View>
	);
}