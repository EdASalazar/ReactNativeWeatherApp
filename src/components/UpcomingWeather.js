import React from "react";
import { StyleSheet, SafeAreaView, Text, FlatList } from "react-native";


const DATA = [
  {},
  {},
  {}
]

const UpcomingWeather = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming Weather</Text>
      <FlatList
        data={}
        renderItem={}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


export default UpcomingWeather