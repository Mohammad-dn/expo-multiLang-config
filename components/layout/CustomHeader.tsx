import { StyleSheet, Text, View } from 'react-native';
import { HapticTab } from '../HapticTab';

export default function CustomHeader({ title }: { title: string }) {
	return (
		<View style={styles.header}>
			<Text style={styles.headerTitle}>{title}</Text>
			<HapticTab onPress={() => {}}>
				<Text>Test</Text>
			</HapticTab>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		height: 60,
		backgroundColor: '#ffffff',
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#e0e0e0',
		elevation: 2,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
	},
	headerTitle: {
		fontSize: 18,
		fontWeight: '600',
		color: '#333333',
	},
});
