import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./components/Home/Home";
import NotificationScreen from "./components/Home/NotifcationScreen";
import { StyleSheet, View, Button, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { DrawerActions } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            header: (props) => (
              <CustomHeader {...props} title="" showSearchBar />
            ),
          }}
        />
        <Drawer.Screen name="Notifications" component={NotificationScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const CustomHeader = ({ navigation, title, showSearchBar }) => {
  const handleToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <View style={styles.headerContainer}>
      <Button title="Menu" onPress={handleToggleDrawer} />
      <View style={styles.titleContainer}>
        {showSearchBar && (
          <>
            <AntDesign
              name="search1"
              size={24}
              color="black"
              style={styles.searchIcon}
            />
            <TextInput placeholder="Search" style={styles.searchInput} />
          </>
        )}
        <View style={styles.title}>
          <Button title={title} onPress={() => console.log("Title pressed")} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 5,
    marginRight: 10,
  },
  title: {
    marginLeft: 10,
  },
});
