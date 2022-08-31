import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';

export default function AppTextInput({ icon, width = '100%', ...otherProps }) {
	return (
		<View style={[styles.container, { width }]}>
			{icon && (
				<MaterialCommunityIcons
					name={icon}
					size={20}
					color={defaultStyles.colors.grey}
					style={styles.icon}
				/>
			)}
			<TextInput
				placeholderTextColor={defaultStyles.colors.midGray}
				style={[defaultStyles.text, styles.text]}
				{...otherProps}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors.lightGray,
		borderRadius: 25,
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 15,
		marginVertical: 10,
	},
	icon: {
		marginRight: 10,
	},
	text: {
		flex: 1,
		paddingTop: 15,
		paddingBottom: 15,
	},
});
