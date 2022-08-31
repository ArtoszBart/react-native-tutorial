import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.required('Email nie może być pusty')
		.email('Błędny format')
		.label('Email'),
	password: Yup.string().required().min(4).label('Password'),
});

export default function LoginScreen() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	return (
		<Screen style={styles.container}>
			<Image
				style={styles.logo}
				source={require('../assets/logo-red.png')}
			/>
			<AppForm
				initialValues={{ email: '', password: '' }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}>
				<AppFormField
					name='email'
					autoCapitalize='none'
					autoCorrect={false}
					icon='email'
					keyboardType='email-address'
					placeholder='Email'
					textContentType='emailAddress'
				/>
				<AppFormField
					name='password'
					autoCapitalize='none'
					autoCorrect={false}
					icon='lock'
					placeholder='Password'
					secureTextEntry
					textContentType='Password'
				/>
				<SubmitButton title='Login' />
			</AppForm>
			{/* <AppTextInput
				autoCapitalize='none'
				autoCorrect={false}
				icon='email'
				keyboardType='email-address'
				onChangeText={(text) => setEmail(text)}
				placeholder='Email'
			/>
			<AppTextInput
				autoCapitalize='none'
				autoCorrect={false}
				icon='lock'
				onChangeText={(text) => setPassword(text)}
				placeholder='Password'
				secureTextEntry
				textContentType='Password'
			/> */}
			{/* <AppButton
				title='Login'
				onPress={() => console.log(email, password)}
			/> */}
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: 'center',
		marginTop: 50,
		marginBottom: 20,
	},
});
