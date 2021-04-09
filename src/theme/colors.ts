import { Colors } from "./types";

export const baseColors = {
  failure: "#d51f5f",
  primary: "#6C584C",
  primaryBright: "#6C584C",
  primaryDark: "#6C584C",
  secondary: "#6c584c",
  success: "#6C584C",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#dde5b6",
  backgroundDisabled: "#d5cc8b",
  contrast: "#191326",
  invertedContrast: "#DDE5B6",
  input: "#eeeaf4",
  inputSecondary: "#ccccf0",
  tertiary: "#FFFFFF",
  text: "#A98467",
  textDisabled: "#FFFFFF",
  textSubtle: "#A98467",
  borderColor: "#E9EAEB",
  card: "#dde5b6",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#343135",
  backgroundDisabled: "#444145",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
