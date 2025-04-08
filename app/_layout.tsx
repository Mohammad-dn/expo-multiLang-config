import { Slot } from 'expo-router';
import { TranslationProvider } from '../providers/TranslationProvider';

export default function RootLayout() {
	return (
		<TranslationProvider>
			<Slot />
		</TranslationProvider>
	);
}
