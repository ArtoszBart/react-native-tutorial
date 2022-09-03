import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';

export default function ActivityIndicator({ visible = false }) {
	if (!visible) return null;
	return (
		<View style={styles.overlay}>
			<AnimatedLottieView
				autoPlay
				loop
				source={require('../assets/animations/loader.json')}
			></AnimatedLottieView>
		</View>
	);
}

const styles = StyleSheet.create({
	overlay: {
		position: 'absolute',
		zIndex: 1,
		backgroundColor: colors.white,
		opacity: 0.8,
		height: '100%',
		width: '100%',
	},
});
