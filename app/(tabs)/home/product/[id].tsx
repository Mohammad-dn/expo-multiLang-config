import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function ProductDetail() {
	const { id } = useLocalSearchParams();
	return (
		<View>
			<Text>Product Detail: {id}</Text>
		</View>
	);
}
