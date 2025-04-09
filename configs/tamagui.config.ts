import { colors } from "@/constants/Colors";
import { config } from "@tamagui/config/v3";
import { createTamagui, createTokens } from "tamagui";

// Define custom colors

const size = {
  0: 0,
  0.25: 2,
  0.5: 4,
  0.75: 6,
  1: 8,
  1.5: 12,
  2: 16,
  2.5: 20,
  3: 24,
  3.5: 28,
  4: 32,
  4.5: 36,
  5: 40,
  5.5: 44,
  6: 48,
  6.5: 52,
  7: 56,
  7.5: 60,
  8: 64,
  8.5: 68,
  9: 72,
  9.5: 76,
  10: 80,
};

const tokens = createTokens({
  color: {
    ...colors,
  },
  size,
  space: {
    ...size,
  },
  radius: {
    0: 0,
    1: 3,
    2: 5,
    3: 7,
    4: 9,
    5: 12,
    6: 16,
    7: 20,
    8: 24,
    9: 28,
    10: 32,
    true: 9999,
  },
  zIndex: {
    0: 0,
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
  },
});

// Define themes
const tamaguiConfig = createTamagui({
  ...config,
  tokens,
  themes: {
    light: {
      current: "currentColor",
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#1C2434",
      red: "#FB5454",
      "black-2": "#010101",
      body: "#64748B",
      bodydark: "#AEB7C0",
      bodydark1: "#DEE4EE",
      bodydark2: "#8A99AF",
      primary: "#3C50E0",
    },
    dark: {},
    blue: {},
  },
});

export default tamaguiConfig;
export type Conf = typeof tamaguiConfig;

// Type augmentation for TypeScript
declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
