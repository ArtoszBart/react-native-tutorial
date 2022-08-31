import React, { useState } from 'react';
import { Switch, Text, TextInput } from 'react-native';

import AppPicker from '../app/components/Picker';
import AppTextInput from '../app/components/TextInput';
import Screen from '../app/components/Screen';

const categories = [
	{ label: 'Furniture', value: 1 },
	{ label: 'Clothing', value: 2 },
	{ label: 'Cameras', value: 3 },
];

export default function InputConponentsLesson() {
	const [firstName, setFirstName] = useState('');
	const [isNew, setIsNew] = useState(false);
	const [category, setCategory] = useState();

	return (
		<Screen>
			<Text>{firstName}</Text>
			<AppTextInput
				placeholder='Username'
				icon='email'
				setText={setFirstName}
			/>
			<Switch
				value={isNew}
				onValueChange={(newValue) => setIsNew(newValue)}
			/>
			<AppPicker
				icon='apps'
				placeholder={'Category'}
				items={categories}
				selectedItem={category}
				onSelectItem={(it) => setCategory(it)}
			/>
			<AppTextInput icon='email' placeholder={'Email'} />
		</Screen>
	);
}
