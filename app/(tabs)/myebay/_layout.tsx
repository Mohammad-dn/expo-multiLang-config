import { Drawer } from 'expo-router/drawer';

export default function MyEbayLayout() {
	return (
		<Drawer>
			<Drawer.Screen name='index' options={{ title: 'Dashboard' }} />
			<Drawer.Screen name='settings' options={{ title: 'Settings' }} />
			<Drawer.Screen name='orders' options={{ title: 'Orders' }} />
		</Drawer>
	);
}
