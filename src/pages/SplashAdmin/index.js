import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const SplashAdmin = () => {
	const navigation = useNavigation();
	useEffect(() => {
		setTimeout(() => {
			navigation.navigate('Admin');
		}, 3000);
	}, []);
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Image source={require('../../images/Logo.png')}
				style={{
					width: 100,
					height: 100,
					borderRadius: 10,
				}}
			/>
			<Text style={{ fontWeight: 'bold', color: "#F3C10D", fontSize: 20, alignItems: 'center' }}> Lokal Danus </Text>
			<Text style={{ fontWeight: 'bold', color: "#F3C10D", fontSize: 20, alignItems: 'center' }}>Admin</Text>
			
		</View>
	);
};

export default SplashAdmin