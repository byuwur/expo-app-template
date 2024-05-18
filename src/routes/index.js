import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import React from "react";
import { Image } from "react-native";
import Toast from "react-native-root-toast";
import { ByBack, ByIcon } from "../components";
import { ACCENT, DARK } from "../components/colors";
import { FUTURA_TTF } from "../fonts";
import { navigationRef, useNavigate } from "../hooks/useNavigation";
import { Login, Splash } from "../pages";
import { LOGO } from "../resources";

const Stack = createNativeStackNavigator();

export const Routes = () => {
	Toast.show(`Welcome to App.`, {
		duration: Toast.durations.LONG,
		position: Toast.positions.BOTTOM,
		shadow: true,
		animation: true,
		hideOnPress: true,
		delay: 0
	});

	const [fontsLoaded] = useFonts({
		Futura: FUTURA_TTF
	});

	return (
		<NavigationContainer ref={navigationRef}>
			<Stack.Navigator
				initialRouteName="splash"
				screenOptions={{
					statusBarColor: DARK,
					headerStyle: { backgroundColor: ACCENT },
					headerTintColor: "white",
					headerTitleAlign: "center",
					headerShown: true,
					headerBackVisible: false,
					headerTitle: () => (
						<Image
							source={LOGO}
							style={{
								width: 80,
								height: 40,
								resizeMode: "contain"
							}}
						/>
					),
					headerLeft: () => <ByBack text="volver" />,
					headerRight: () => (
						<ByIcon
							name="settings-outline"
							action={() => {
								useNavigate("Login");
							}}
						/>
					)
				}}>
				<Stack.Screen name="Splash" component={Splash} options={{}} />
				<Stack.Screen name="Login" component={Login} options={{}} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
