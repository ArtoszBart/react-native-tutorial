import React from 'react';
import { useFormikContext } from 'formik';
import AppPicker from '../Picker';
import ErrorMessage from './ErrorMessage';

export default function AppFormPicker({
	items,
	name,
	numberOfColumns = 1,
	PickerItemComponent,
	placeholder,
	width,
}) {
	const { errors, setFieldValue, touched, values } = useFormikContext();
	return (
		<>
			<AppPicker
				items={items}
				numberOfColumns={numberOfColumns}
				onSelectItem={(item) => setFieldValue(name, item)}
				placeholder={placeholder}
				selectedItem={values[name]}
				width={width}
				PickerItemComponent={PickerItemComponent}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}
