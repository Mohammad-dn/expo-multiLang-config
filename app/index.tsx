import { getLocales } from 'expo-localization';
import { Link } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Button, StyleSheet, Text, View } from 'react-native';
import { get } from '../services/apiService';
export default function Home() {
	const { t } = useTranslation();
	const handleGetData = async () => {
		const response = await get('https://ehyperlab.com/cms/category/levelOne');
		console.log(response);
	};

	return (
		<View style={styles.container}>
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Text>{t('welcome')}</Text>
			</View>

			<Link href={'/home'}>
				<Text>Go home</Text>
			</Link>

			<Button title='Get data' onPress={handleGetData} />
			<Link href={'/auth'}>
				<Text>Go auth</Text>
			</Link>
			<Link href={'/item-details/asdasd'}>
				<Text>Go details</Text>
			</Link>
			<Text>Device locale: {getLocales()[0].languageCode}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
	text: {
		fontSize: 20,
		marginBottom: 16,
	},
});
