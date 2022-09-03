import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';
import useAuth from '../auth/useAuth';

const menuItems = [
	{
		title: 'My Listings',
		icon: {
			name: 'format-list-bulleted',
			backgroundColor: colors.primary,
		},
	},
	{
		title: 'My Messages',
		icon: {
			name: 'email',
			backgroundColor: colors.secondary,
		},
		targetScreen: 'Messages',
	},
];

export default function AccountScreen({ navigation }) {
	const { user, logOut } = useAuth();

	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title={user.name}
					subTitle={user.email}
					image={require('../assets/me.jpg')}
				/>
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={(menuItem) => menuItem.title}
					scrollEnabled={false}
					ItemSeparatorComponent={ListItemSeparator}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							IconComponent={
								<Icon
									name={item.icon.name}
									backgroundColor={item.icon.backgroundColor}
								/>
							}
							onPress={() => {
								navigation.navigate(item.targetScreen);
							}}
						/>
					)}
				/>
			</View>
			<View style={styles.container}>
				<ListItem
					title='Log Out'
					IconComponent={
						<Icon name={'logout'} backgroundColor='#ffe66d' />
					}
					onPress={() => logOut()}
				/>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.lightGray,
	},
	container: {
		marginVertical: 20,
	},
});
