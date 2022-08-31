import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ImageInput from './ImageInput';

export default function ImageInputList({
	imageUris = [],
	onRemoveImage,
	onAddImage,
}) {
	const scrollView = useRef();

	return (
		<View>
			<ScrollView
				horizontal
				ref={scrollView}
				onContentSizeChange={() => scrollView.current.scrollToEnd()}>
				<View style={styles.container}>
					{imageUris.map((uri) => (
						<View key={uri} style={styles.image}>
							<ImageInput
								imageUri={uri}
								onChangeEvent={() => onRemoveImage(uri)}
							/>
						</View>
					))}
					<ImageInput onChangeEvent={(uri) => onAddImage(uri)} />
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	image: { marginRight: 10 },
});
