import React from "react"
import { View, StyleSheet, Text } from "react-native"
import CurrentWeather from "./src/components/CurrentWeather"

const App = () => {
  return (
  <View styles={styles.container}>
    <CurrentWeather />
    <Text>Working</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App