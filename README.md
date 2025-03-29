# Multi-Language Expo App 🌐

A modern Expo application with built-in internationalization (i18n) support, file-based routing, and a well-organized folder structure.

## Features ✨

-   🌍 Multi-language support (English & Farsi)
-   🛣️ File-based routing with Expo Router
-   📱 Cross-platform (iOS, Android, Web)
-   🎨 Themed components
-   📦 Well-organized folder structure
-   🔄 Language switching functionality

## Project Structure 📁

```
├── app/                    # Main application screens
│   ├── (tabs)/            # Tab-based navigation screens
│   ├── _layout.tsx        # Root layout configuration
│   ├── home.tsx           # Home screen
│   └── product.tsx        # Product screen
├── components/            # Reusable components
│   ├── ThemedText.tsx     # Themed text component
│   └── ThemedView.tsx     # Themed view component
├── locales/              # Translation files
│   ├── en.json           # English translations
│   └── fa.json           # Farsi translations
├── providers/            # Context providers
│   └── TranslationProvider.tsx  # i18n provider
└── constants/            # App constants
    └── Colors.ts         # Color definitions
```

## Getting Started 🚀

1. Install dependencies:

    ```bash
    npm install
    ```

2. Start the development server:

    ```bash
    npx expo start
    ```

3. Run on your preferred platform:
    - Press `i` for iOS simulator
    - Press `a` for Android emulator
    - Press `w` for web browser

## Language Support 🌍

The app currently supports:

-   English (en)
-   Farsi (fa)

To add a new language:

1. Create a new translation file in `locales/` (e.g., `es.json` for Spanish)
2. Add the language to the `resources` object in `providers/TranslationProvider.tsx`
3. Add a language switch button in your UI

## Routing 🛣️

This project uses Expo Router for file-based routing:

-   `/` - Home screen
-   `/product` - Product screen
-   `/tabs/*` - Tab-based navigation screens

## Theming 🎨

The app includes themed components that automatically adapt to the system's light/dark mode:

-   `ThemedText` - Text component with theme support
-   `ThemedView` - View component with theme support

## Development 🛠️

### Adding New Screens

1. Create a new file in the `app/` directory
2. Export a default component
3. The route will be automatically available based on the file name

### Adding Translations

1. Add new keys to both `en.json` and `fa.json`
2. Use the `t()` function from `useTranslation` hook:
    ```typescript
    const { t } = useTranslation();
    <Text>{t("your.translation.key")}</Text>;
    ```

## Dependencies 📦

-   expo
-   expo-router
-   i18next
-   react-i18next
-   expo-localization
-   react-native-reanimated
-   @expo/vector-icons

## Contributing 🤝

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License 📄

This project is licensed under the MIT License - see the LICENSE file for details.
