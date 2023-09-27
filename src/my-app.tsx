import { StatusBar } from "expo-status-bar";
import { InitialLogin } from "./modules/pages/login/login";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./modules/pages/home/home";

const Stack = createNativeStackNavigator();

const MyApp: React.FC = () => {
    return (
        <NavigationContainer  >
            <Stack.Navigator screenOptions={{ headerShown: false }}  initialRouteName="InitialLogin">
                <Stack.Screen name="InitialLogin" component={InitialLogin} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export { MyApp };
