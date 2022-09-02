import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import LottieView from 'lottie-react-native';

import colors from '../config/colors';

export default function UploadScreen({
	progress = 0,
	visible = false,
	onDone,
}) {
	return (
		<Modal visible={visible}>
			<View style={styles.container}>
				{progress < 1 ? (
					<ProgressBar color={colors.primary} progress={progress} />
				) : (
					<LottieView
						autoPlay
						loop={false}
						onAnimationFinish={onDone}
						source={require('../assets/animations/done.json')}
						style={styles.animation}
					/>
				)}
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
	animation: {
		width: 150,
	},
});
