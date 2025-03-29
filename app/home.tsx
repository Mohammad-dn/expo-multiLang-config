import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { Button, View } from "react-native";
import { ThemedText } from "../components/ThemedText";

export default function Home() {
	const { t, i18n } = useTranslation();

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				gap: 20,
			}}
		>
			<ThemedText type="title">{t("welcome")}</ThemedText>
			<Button
				title={t("product")}
				onPress={() => router.push("/product")}
			/>

			<View style={{ flexDirection: "row", gap: 10 }}>
				<Button
					title="English"
					onPress={() => changeLanguage("en")}
					color={i18n.language === "en" ? "#0a7ea4" : undefined}
				/>
				<Button
					title="فارسی"
					onPress={() => changeLanguage("fa")}
					color={i18n.language === "fa" ? "#0a7ea4" : undefined}
				/>
			</View>
		</View>
	);
}
