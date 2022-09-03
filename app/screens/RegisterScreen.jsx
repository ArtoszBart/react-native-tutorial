import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import {
	AppForm,
	AppFormField,
	ErrorMessage,
	SubmitButton,
} from '../components/forms';
import usersApi from '../api/users';
import authApi from '../api/auth';
import useAuth from '../auth/useAuth';
import useApi from '../hooks/useApi';
import ActivityIndicator from '../components/ActivityIndicator';

const validationSchema = Yup.object().shape({
	name: Yup.string().required().label('Name'),
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(4).label('Password'),
	// cpassword: Yup.string()
	// 	.oneOf([Yup.ref('password'), null], 'Passwords must match')
	// 	.label('Password'),
});

function RegisterScreen() {
	const registerApi = useApi(usersApi.register);
	const loginApi = useApi(usersApi.login);
	const auth = useAuth();
	const [error, setError] = useState();

	const handleSubmitAsync = async (userInfo) => {
		const result = await registerApi.requestAsync(userInfo);
		if (!result.ok) {
			if (result.data) setError(result.data.error);
			else {
				setError('An unexpected error occurred');
				console.log(result);
			}
			return;
		}

		const { data: authToken } = await loginApi.requestAsync(
			userInfo.email,
			userInfo.password
		);
		auth.logIn(authToken);
	};

	return (
		<>
			<ActivityIndicator
				visible={registerApi.isLoading || loginApi.isLoading}
			/>
			<Screen style={styles.container}>
				<AppForm
					initialValues={{
						name: '',
						email: '',
						password: '',
						// cpassword: '',
					}}
					onSubmit={handleSubmitAsync}
					validationSchema={validationSchema}
				>
					<ErrorMessage error={error} visible={error} />
					<AppFormField
						autoCorrect={false}
						icon='account'
						name='name'
						placeholder='Name'
						textContentType='usename'
					/>
					<AppFormField
						autoCapitalize='none'
						autoCorrect={false}
						icon='email'
						keyboardType='email-address'
						name='email'
						placeholder='Email'
						textContentType='emailAddress'
					/>
					<AppFormField
						autoCapitalize='none'
						autoCorrect={false}
						icon='lock'
						name='password'
						placeholder='Password'
						secureTextEntry
						textContentType='newPassword'
					/>
					{/* <AppFormField
					autoCapitalize='none'
					autoCorrect={false}
					icon='lock'
					name='cpassword'
					placeholder='Confirm Password'
					secureTextEntry
					textContentType='newPassword'
				/> */}
					<SubmitButton title='Register' />
				</AppForm>
			</Screen>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
});

export default RegisterScreen;
