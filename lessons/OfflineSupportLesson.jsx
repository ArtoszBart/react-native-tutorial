import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Screen from '../app/components/Screen';

export default function OfflineSupportLesson() {
	// NetInfo.fetch().then((netInfo) => console.log(netInfo));
	// const insubscribe = NetInfo.addEventListener((netInfo) => console.log(netInfo));
	const netInfo = useNetInfo();
	const demoStorageAsync = async () => {
		try {
			await AsyncStorage.setItem('person', JSON.stringify({ id: 1 }));
			const value = await AsyncStorage.getItem('person');
			const person = JSON.parse(value);
			console.log(person);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Screen>
			<Button
				title='Net'
				disabled={!netInfo.isInternetReachable}
				onPress={demoStorageAsync}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {},
});
