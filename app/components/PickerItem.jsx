import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import AppText from './AppText/AppText.ios';

export default function PickerItem({ item, onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<AppText style={styles.text} numberOfLines={1}>
				{item.label}
			</AppText>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	text: {
		padding: 20,
		textAlign: 'center',
	},
});
