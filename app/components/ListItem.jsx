import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';

export default function ListItem({
	title,
	subTitle,
	image,
	IconComponent,
	onPress,
	renderRightActions,
}) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight
				underlayColor={colors.lightGray}
				onPress={onPress}>
				<View style={styles.container}>
					{IconComponent}
					{image && <Image style={styles.image} source={image} />}
					<View style={styles.detailsContainer}>
						<AppText style={styles.title} numberOfLines={1}>
							{title}
						</AppText>
						{subTitle && (
							<AppText style={styles.subTitle} numberOfLines={2}>
								{subTitle}
							</AppText>
						)}
					</View>
					<MaterialCommunityIcons
						name='chevron-right'
						size={25}
						color={colors.midGray}
					/>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 15,
		backgroundColor: colors.white,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 45,
	},
	detailsContainer: {
		marginLeft: 10,
		justifyContent: 'center',
		flex: 1,
	},
	title: {
		fontWeight: '500',
	},
	subTitle: {
		color: colors.grey,
	},
});
