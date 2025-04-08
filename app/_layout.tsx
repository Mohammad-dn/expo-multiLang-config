import { Slot } from 'expo-router';
import { TranslationProvider } from '../providers/TranslationProvider';
export default function Layout() {
	return (
		<TranslationProvider>
			<Slot />
		</TranslationProvider>
	);
}
