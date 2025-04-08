import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: '#0070f3',
				tabBarInactiveTintColor: '#888',
				tabBarStyle: {
					backgroundColor: '#fff',
					borderTopColor: '#eee',
					paddingBottom: 6,
					height: 60,
				},
				header: ({ route }: { route: { name: string } }) => <></>,
			}}>
			<Tabs.Screen
				name='home/index'
				options={{
					title: 'Home',
					tabBarIcon: ({ color, size }: { color: string; size: any }) => (
						<Ionicons name='home-outline' color={color} size={size} />
					),
				}}
			/>
			<Tabs.Screen
				name='categories/index'
				options={{
					title: 'Categories',
					tabBarIcon: ({ color, size }: { color: string; size: any }) => (
						<Ionicons name='list-outline' color={color} size={size} />
					),
				}}
			/>
			<Tabs.Screen
				name='sell/index'
				options={{
					title: 'Sell',
					tabBarIcon: ({ color, size }: { color: string; size: any }) => (
						<Ionicons name='add-circle-outline' color={color} size={size} />
					),
				}}
			/>
			<Tabs.Screen
				name='notifications/index'
				options={{
					title: 'Notifications',
					tabBarIcon: ({ color, size }: { color: string; size: any }) => (
						<Ionicons name='notifications-outline' color={color} size={size} />
					),
				}}
			/>
			<Tabs.Screen
				name='myebay/index'
				options={{
					title: 'My eBay',
					tabBarIcon: ({ color, size }: { color: string; size: any }) => (
						<Ionicons name='add-circle' color={color} size={size} />
					),
				}}
			/>
		</Tabs>
	);
}
