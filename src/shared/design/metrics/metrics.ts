import Constants from "expo-constants";
import { Dimensions } from "react-native";
import { RFValue } from "../libs/responsive";

const statusBarHeight = Constants.statusBarHeight;
const { height, width } = Dimensions.get("window");

export const METRICS = {
  statusBarHeight,
  PADDING: RFValue(12),
  height,
  width,
};