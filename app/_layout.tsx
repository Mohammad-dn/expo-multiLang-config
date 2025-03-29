import { Stack } from "expo-router";
import { TranslationProvider } from "../providers/TranslationProvider";

export default function Layout() {
	return (
		<TranslationProvider>
			<Stack screenOptions={{ headerShown: true }}>
				<Stack.Screen name="home" options={{ title: "Home" }} />
				<Stack.Screen name="product" options={{ title: "Product" }} />
				<Stack.Screen name="index" options={{ title: "Home" }} />
			</Stack>
		</TranslationProvider>
	);
}
