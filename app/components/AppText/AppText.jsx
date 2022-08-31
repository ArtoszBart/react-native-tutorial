import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

export default function AppText({ children, style, ...otherProps }) {
	return (
		<Text style={[styles.text, style]} {...otherProps}>
			{children}
		</Text>
	);
}

const styles = StyleSheet.create({
	text: {
		color: 'tomato',
		...Platform.select({
			ios: {
				fontSize: 20,
				fontFamily: 'Avenir',
			},
			android: {
				fontSize: 18,
				fontFamily: 'Roboto',
			},
		}),
	},
});
