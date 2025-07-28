import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <View style={styles.container}>
         <Text 
              style={styles.text}
              >Oops! Sorry the page you&apos;re looking for is either under construction or simply does not exist</Text>
        {/* <Link href="/" style={styles.button}>
          Go back to Home screen!
        </Link> */}
      </View>
    </>
  );
}

// create styles object to create custom styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff2f8",
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    color: "#222020"
  },
  button:{
    fontSize: 20,
    backgroundColor: "#627F23",
    color: "#fff2f8",
    paddingVertical: 12,
    paddingHorizontal: 20,
  }
})
