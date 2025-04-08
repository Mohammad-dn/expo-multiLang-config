import { Tabs } from 'expo-router';

export default function TabLayout() {
	return (
		<Tabs>
			<Tabs.Screen name='home' options={{ title: 'Home' }} />
			<Tabs.Screen name='categories' options={{ title: 'Categories' }} />
			<Tabs.Screen name='sell' options={{ title: 'Sell' }} />
			<Tabs.Screen name='notifications' options={{ title: 'Notifications' }} />
			<Tabs.Screen name='myebay' options={{ title: 'My eBay' }} />
		</Tabs>
	);
}
