import React from 'react';
import { View, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import AppText from '../components/AppText';
import ContactSellerForm from '../components/ContactSellerForm';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

export default function ListingDetailsScreen({ route }) {
	const listing = route.params;
	console.log(listing.images[0].url);
	return (
		<KeyboardAvoidingView
			behavior='position'
			keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
		>
			<Image
				uri={listing.images[0].url}
				preview={{ uri: listing.images[0].thumbnailUrl }}
				style={styles.image}
				tint='light'
			/>
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>{listing.title}</AppText>
				<AppText style={styles.subTitle}>{listing.price}</AppText>
				<View style={styles.userContainer}>
					<ListItem
						image={require('../assets/me.jpg')}
						title='Bartosz Art'
						subTitle='5 Listings'
					></ListItem>
				</View>
				<ContactSellerForm listing={listing} />
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 300,
	},
	detailsContainer: {
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: '500',
	},
	subTitle: {
		color: colors.secondary,
		fontWeight: 'bold',
		fontSize: 20,
		marginVertical: 10,
	},
	userContainer: {
		marginVertical: 40,
	},
});
