import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./Components/SplashScreen.js";
import ChooseStepSize from "./Components/ChooseStepSize.js";
import Instructions from "./Components/Instructions.js";
// import Instructions2 from "./Components/Instructions2.js";
import HomePage from "./Components/HomePage.js";
import Settings from "./Components/Settings.js";
import SelectStation from "./Components/SelectStation.js";
import SelectExit from "./Components/SelectExit.js";
import SelectTypeOfExit from "./Components/SelectTypeOfExit.js";
import NearbyPlaces from "./Components/NearbyPlaces.js";
import Directions from "./Components/Directions.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash Screen" component={SplashScreen} />
        <Stack.Screen name="Instructions" component={Instructions} />
        {/* <Stack.Screen name="Instructions2" component={Instructions2} /> */}
        <Stack.Screen name="Choose Step Size" component={ChooseStepSize} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Select Station" component={SelectStation} />
        <Stack.Screen name="Select Exit" component={SelectExit} />
        <Stack.Screen name="Nearby Places" component={NearbyPlaces} />
        <Stack.Screen name="Select Type Of Exit" component={SelectTypeOfExit} />
        <Stack.Screen name="Directions" component={Directions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
