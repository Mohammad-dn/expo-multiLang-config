import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function ItemDetailsScreen() {
	const localSearchParam = useLocalSearchParams();
	return (
		<View>
			<Text>Item details of {localSearchParam.productId.toString()}</Text>
		</View>
	);
}
