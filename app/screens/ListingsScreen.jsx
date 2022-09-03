import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import AppButton from '../components/Button';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import AppText from '../components/AppText';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';

// const listings = [
// 	{
// 		id: 1,
// 		title: 'Red jacket for sale',
// 		price: 100,
// 		image: require('../assets/jacket.jpg'),
// 	},
// 	{
// 		id: 2,
// 		title: 'Couch in great condition',
// 		price: 1000,
// 		image: require('../assets/couch.jpg'),
// 	},
// ];

export default function ListingsScreen({ navigation }) {
	const {
		data: listings,
		hasError,
		isLoading,
		requestAsync: loadListingsAsync,
	} = useApi(listingsApi.getListings);

	useEffect(() => {
		loadListingsAsync(1, 2, 3);
	}, []);

	return (
		<>
			<ActivityIndicator visible={isLoading} />
			<Screen style={styles.screen}>
				{hasError && (
					<>
						<AppText>Couldn't retrieve the listings.</AppText>
						<AppButton title='Retry' onPress={loadListingsAsync} />
					</>
				)}
				<FlatList
					data={listings}
					keyExtractor={(listing) => listing.id.toString()}
					renderItem={({ item }) => (
						<Card
							title={item.title}
							subTitle={'$' + item.price}
							imageUrl={item.images[0].url}
							thumbnailUrl={item.images[0].thumbnailUrl}
							onPress={() =>
								navigation.navigate(
									routes.LISTING_DETAILS,
									item
								)
							}
						/>
					)}
				/>
			</Screen>
		</>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 20,
		backgroundColor: colors.lightGray,
	},
});
