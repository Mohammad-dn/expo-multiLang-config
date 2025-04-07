import { Stack } from 'expo-router';
import CustomHeader from '../components/layout/CustomHeader';
import { TranslationProvider } from '../providers/TranslationProvider';
export default function Layout() {
	return (
		<TranslationProvider>
			<Stack
				screenOptions={{
					header: ({ route, options }: { route: any; options: any }) => (
						<CustomHeader title={options.title || route.name} />
					),
					headerShown: true,
				}}>
				<Stack.Screen name='home' options={{ title: 'Home' }} />
				<Stack.Screen name='product' options={{ title: 'Product' }} />
				<Stack.Screen name='index' options={{ title: 'Home' }} />
				<Stack.Screen name='auth/index' options={{ title: 'Auth' }} />
				<Stack.Screen
					name='item-details/[productId]'
					options={{
						title: 'Item Details',
					}}
				/>
			</Stack>
		</TranslationProvider>
	);
}
