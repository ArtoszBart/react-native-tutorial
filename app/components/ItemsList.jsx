import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';

export default function ItemsList() {
	return (
		<View
			style={{
				backgroundColor: '#f8f4f4',
				padding: 20,
				paddingTop: 100,
			}}
		>
			<Card
				title='Red jacket for sale!'
				subTitle='$100'
				image={require('../assets/splash.png')}
			/>
		</View>
	);
}
