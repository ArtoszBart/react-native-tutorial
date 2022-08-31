import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import Screen from '../app/components/Screen';
import ImageInput from '../app/components/ImageInput';
import ImageInputList from '../app/components/ImageInputList';

export default function NativeFeaturesLesson() {
	const [imageUris, setImageUris] = useState([]);

	const handleAdd = (uri) => {
		setImageUris([...imageUris, uri]);
	};

	const handleRemove = (uri) => {
		setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
	};

	return (
		<Screen style={styles.container}>
			<ImageInputList
				imageUris={imageUris}
				onAddImage={handleAdd}
				onRemoveImage={handleRemove}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {},
	image: { width: 200, height: 200 },
});
