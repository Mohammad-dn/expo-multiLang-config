import Drawer from 'expo-router/drawer';
import { TranslationProvider } from '../providers/TranslationProvider';
export default function Layout() {
	return (
		<TranslationProvider>
			<Drawer
				screenOptions={{
					headerShown: true,
				}}>
				<Drawer.Screen name='home' options={{ title: 'Home' }} />
				<Drawer.Screen name='product' options={{ title: 'Product' }} />
				<Drawer.Screen name='index' options={{ title: 'Home' }} />
				<Drawer.Screen name='auth/index' options={{ title: 'Auth' }} />
				<Drawer.Screen
					name='item-details/[productId]'
					options={{
						title: 'Item Details',
					}}
				/>
			</Drawer>
		</TranslationProvider>
	);
}
