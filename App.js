import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import store from "./state-management/store";
import { AppNavigator } from "./Routes/AppNavigator";

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   PR: require("./assets/fonts/PoppinsRegular.ttf"),
  //   PB: require("./assets/fonts/PoppinsBold.ttf"),
  //   PL: require("./assets/fonts/PoppinsLight.ttf"),
  //   PSB: require("./assets/fonts/PoppinsSemiBold.ttf"),
  //   PM: require("./assets/fonts/PoppinsMedium.ttf"),
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
