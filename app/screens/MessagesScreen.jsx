import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const initialMessages = [
	{
		id: 1,
		title: 'Bartosz Art',
		description: 'Hey! Is this item still available?',
		image: require('../assets/me.jpg'),
	},
	{
		id: 2,
		title: 'Bartosz Art',
		description:
			"I'm interested in this item. When will you be able to post it?",
		image: require('../assets/me.jpg'),
	},
];

export default function MessagesScreen() {
	const [messages, setMessages] = useState(initialMessages);
	const [refreshing, setRefreshing] = useState(false);

	const handleDelete = (message) => {
		console.log('asd');
		setMessages(messages.filter((m) => m.id !== message.id));
	};

	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.description}
						image={item.image}
						onPress={() => console.log('Message selected', item)}
						renderRightActions={() => (
							<ListItemDeleteAction
								onPress={() => handleDelete(item)}
							/>
						)}
					/>
				)}
				ItemSeparatorComponent={ListItemSeparator}
				refreshing={refreshing}
				onRefresh={() => setMessages(initialMessages)}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	separator: {
		width: '100%',
		height: 1,
		backgroundColor: 'black',
	},
});
