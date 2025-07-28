import { StyleSheet, Text, View } from "react-native";

export default function WardrobeScreen() {
  return (
    <View
      style={styles.container}
    >
      <Text 
      style={styles.text}
      >Wardrobe</Text>
    </View>
  );
}

// create styles object to create custom styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF2F8",
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    color: "#222020"
  }
})
