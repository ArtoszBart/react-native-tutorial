import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

export default function NewListingButton({ onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons
					name='plus-circle'
					color={colors.white}
					size={40}
				/>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		bottom: 20,
		height: 80,
		width: 80,
		borderRadius: 40,
		borderWidth: 10,
		borderColor: colors.white,
		backgroundColor: colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
