import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AppText from '../app/components/AppText'

export default function App() {
  return (
	<View 
		style={{
			flex:1,
			justifyContent: 'center',
			alignItems: 'center',
		}}
	>
		<View
			style={{
				backgroundColor: 'dodgerblue',
				width: 100,
				height: 100,
				borderWidth: 10,
				borderColor: 'royalblue',
				borderRadius: 10,
				borderTopWidth: 20,
				borderTopLeftRadius: 50,

				// iOS shadows
				shadowColor: 'grey',
				shadowOffset: { width: 10, height: 10},
				shadowOpacity: 1,
				shadowRadius: 5,

				// Android shadows
				elevation: 20,

				padding: 20,
				paddingHorizontal: 10
			}}
		>
			<View
				style={{
					backgroundColor: 'gold',
					width: 50,
					height: 50,
				}}
			>

			</View>
		</View>
		<View
			style={{
				backgroundColor: 'tomato',
				width: 100,
				height: 100,
				margin: 20,
			}}
		>

		</View>
		<Text
			style={{
				marginBottom: 10,

				// fontFamily: "Courier",
				fontSize: 30,
				fontStyle: 'italic',
				fontWeight: '600',
				color: 'tomato',
				textTransform: 'capitalize',
				textDecorationLine: 'underline',
				textAlign: 'center',
				lineHeight: 30,
			}}
		>I love React Native! This is my first React Native app! Here's some more text.</Text>

		<AppText>I love React Native!</AppText>

		<MaterialCommunityIcons name='email' size={60} color={'dodgerblue'}/>
	</View>
  )
}

const styles = StyleSheet.create({
	
})