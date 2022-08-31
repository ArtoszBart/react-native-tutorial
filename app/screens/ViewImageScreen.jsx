import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors';

export default function ViewImageScreen() {
	return (
		<View style={styles.container}>
			<View style={[styles.closeIcon, styles.icon]}>
				<MaterialCommunityIcons name='close' color={colors.white} size={35}/>
			</View>
			<View style={[styles.deleteIcon, styles.icon]}>
			<MaterialCommunityIcons name='trash-can-outline' color={colors.white} size={35}/>
			</View>
			<Image 
				resizeMode='contain'
				style={styles.image} 
				source={require('../assets/chair.jpg')}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.dark,
		flex: 1,
	},
	closeIcon: {
		left: 30,
	},
	deleteIcon: {
		right: 30,
	},
	icon: {
		position: 'absolute',
		top: 40,
	},
	image: {
		width: '100%',
		height: '100%',
	},
})