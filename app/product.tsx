import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ProductScreen() {
	return (
		<View style={styles.container}>
			<Link href="/">
				<Text>main</Text>
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
