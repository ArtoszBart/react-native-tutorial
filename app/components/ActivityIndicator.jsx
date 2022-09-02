import React from 'react';
import AnimatedLottieView from 'lottie-react-native';

export default function ActivityIndicator({ visible = false }) {
	if (!visible) return null;
	return (
		<AnimatedLottieView
			autoPlay
			loop
			source={require('../assets/animations/loader.json')}
		></AnimatedLottieView>
	);
}
