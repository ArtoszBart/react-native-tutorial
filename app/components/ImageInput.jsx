import React, { useEffect } from 'react';
import {
	View,
	StyleSheet,
	Image,
	TouchableWithoutFeedback,
	Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

export default function ImageInput({ imageUri, onChangeEvent }) {
	useEffect(() => {
		requestPermissionAsync();
	}, []);

	const requestPermissionAsync = async () => {
		// const { granted } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
		const { granted } = await ImagePicker.requestCameraPermissionsAsync();
		if (!granted) {
			alert('You need to enable permission to access the library.');
		}
	};

	const handlePress = () => {
		if (!imageUri) selectImage();
		else {
			Alert.alert('Delete', 'Are you sure you want to delete?', [
				{
					text: 'Yes',
					onPress: () => onChangeEvent(),
				},
				{ text: 'No' },
			]);
		}
	};

	const selectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 0.5,
			});
			if (!result.cancelled) onChangeEvent(result.uri);
		} catch (error) {
			console.log('Error reading an image', error);
		}
	};

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={styles.container}>
				{!imageUri && (
					<MaterialCommunityIcons
						name='camera'
						size={40}
						color={colors.midGray}
					/>
				)}
				{imageUri && (
					<Image source={{ uri: imageUri }} style={styles.image} />
				)}
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.lightGray,
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
		height: 100,
		width: 100,
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: '100%',
	},
});
