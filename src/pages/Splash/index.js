import React , {useEffect} from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { useNavigation} from '@react-navigation/native'

const Splash = () => {
	const navigation=useNavigation();
	useEffect(()=>{
		setTimeout(()=>{
			navigation.navigate('Login')
		},3000)
	},[])
	return (
		<View style={styles.container}>
			<Image style={styles.logos} source={require('../../images/Logo.png')}/>
			<Text style={{color:'BCA345'}}>LOKAL DANUS</Text>
		</View>
	)
}

export default Splash

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
	logos:{
		width:100,
		height:100,
		borderRadius: 10,
	}
})
