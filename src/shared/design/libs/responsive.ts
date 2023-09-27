import { Dimensions } from "react-native";
import { RFValue as RF } from "react-native-responsive-fontsize";

const { width, height } = Dimensions.get("screen");

const SCREEN_HEIGHT = height > width ? height : width;

export function RFValue(value: number) {
  return RF(value, SCREEN_HEIGHT);
}