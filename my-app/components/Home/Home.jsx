import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useLayoutEffect } from "react";

export default function Home() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <AntDesign
            name="search1"
            size={24}
            color="black"
            onPress={console.log("Hi")}
          />
        </TouchableOpacity>
      ),
      headerRightContainerStyle: {
        right: 10,
      },
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hi Bruh</Text>
      <StatusBar style="auto" />
      <Button
        onPress={() => navigation.navigate("Notifications")}
        title="Click Me"
      >
        <AntDesign name="search1" size={24} color="black" />
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
});
