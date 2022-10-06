import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { ScaledSheet } from 'react-native-size-matters';

import Storage from '../Utils/Storage';

const RouteCheckingContainer = (props) => {
	const { navigation } = props;
	const token = async () => {
		const userToken = await Storage.retrieveData('token');
		navigation.reset({
			index: 0,
			routes: [
				{
					name: userToken !== null ? 'home' : 'signin',
				},
			],
		});
	};

	useEffect(() => {
		token();
		return
	}, []);

	return (
		<View style={styles.container}>
			<ActivityIndicator color="black" size="large" />
		</View>
	);
};

const styles = ScaledSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default RouteCheckingContainer;