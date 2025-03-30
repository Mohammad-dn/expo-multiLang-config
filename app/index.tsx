import { getLocales } from "expo-localization";
import { Link } from "expo-router";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
export default function Home() {
	const { t } = useTranslation();

	return (
		<View style={styles.container}>
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Text>{t("welcome")}</Text>
			</View>

			<Link href={"/home"}>
				<Text>Go home</Text>
			</Link>
			<Link href={"/auth"}>
				<Text>Go auth</Text>
			</Link>
			<Link href={"/item-details/asdasd"}>
				<Text>Go details</Text>
			</Link>
			<Text>Device locale: {getLocales()[0].languageCode}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},
	text: {
		fontSize: 20,
		marginBottom: 16,
	},
});
