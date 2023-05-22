import React from "react";
import { StyleSheet, SafeAreaView, Text, FlatList, StatusBar, ImageBackground } from "react-native";
import ListItem from "../components/ListItem";


const DATA = [
  {
    dt_txt: "2023",
    main: {
      temp_max: 90,
      temp_min: 68,
    },
    weather: [
      {
        main: 'Clear'
      }
    ]
  },
  {
    dt_txt: "2024",
    main: {
      temp_max: 40,
      temp_min: 28,
    },
    weather: [
      {
        main: 'Cloudy'
      }
    ]
  },
  {
    dt_txt: "2025",
    main: {
      temp_max: 190,
      temp_min: 98,
    },
    weather: [
      {
        main: 'Sunny'
      }
    ]
  }
]


const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )

  const { container, image } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground 
        source={require('../../assets/beautiful-nature.jpg')} 
        style={image}>
        <Text>Upcoming Weather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue',
  },
  image: {
    flex: 1,
  }
})


export default UpcomingWeather