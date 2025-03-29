import * as Localization from "expo-localization";
import i18n from "i18next";
import React, { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import translationEN from "../locales/en.json";
import translationFA from "../locales/fa.json";

i18n.init({
	resources: {
		en: { translation: translationEN },
		fa: { translation: translationFA },
	},
	lng: Localization.getLocales()[0].languageCode || "en",
	fallbackLng: "en",
	interpolation: { escapeValue: false },
});

export const TranslationProvider = ({ children }: { children: ReactNode }) => (
	<I18nextProvider i18n={i18n}>{children}</I18nextProvider>
);
