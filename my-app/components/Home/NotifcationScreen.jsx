import { Button, View } from "react-native";
export default function NotificationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("Home")}
        title="Go back home"
      />
    </View>
  );
}
