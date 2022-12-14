import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import {
	ErrorMessage,
	AppForm,
	AppFormField,
	SubmitButton,
} from '../components/forms';
import authApi from '../api/auth';
import useAuth from '../auth/useAuth';

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.required('Email nie może być pusty')
		.email('Błędny format')
		.label('Email'),
	password: Yup.string().required().min(4).label('Password'),
});

export default function LoginScreen() {
	const [loginFailed, setLoginFailed] = useState(false);
	const { logIn } = useAuth();

	const handleSubmitAsync = async ({ email, password }) => {
		const result = await authApi.login(email, password);
		if (!result.ok) return setLoginFailed(true);

		setLoginFailed(false);
		logIn(result.data);
	};

	return (
		<Screen style={styles.container}>
			<Image
				style={styles.logo}
				source={require('../assets/logo-red.png')}
			/>
			<AppForm
				initialValues={{ email: '', password: '' }}
				onSubmit={handleSubmitAsync}
				validationSchema={validationSchema}
			>
				<ErrorMessage
					error='Invalid email and/or password'
					visible={loginFailed}
				/>
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
