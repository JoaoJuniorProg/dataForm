import * as SplashScreen from "expo-splash-screen";
import { LogBox } from "react-native";
import { MyApp } from "./src/my-app";


SplashScreen.preventAutoHideAsync();

LogBox.ignoreAllLogs();

export default function App() {

  setTimeout(() => {
    SplashScreen.hideAsync();
  }, 2000);

  return <MyApp />;

}
