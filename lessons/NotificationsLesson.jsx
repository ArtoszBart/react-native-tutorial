import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Screen from '../app/components/Screen';
import * as Notifications from 'expo-notifications';

export default function NotificationsLesson() {
	const showNotificationAsync = async () => {
		await Notifications.scheduleNotificationAsync({
			content: {
				title: 'Congratulations',
				body: 'Your orded was successfully placed!',
				data: { data: 'goes here' },
			},
			trigger: null, // { seconds: 5 }
		});
	};

	return (
		<Screen>
			<Button
				title='Tap for notification'
				onPress={showNotificationAsync}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {},
});
