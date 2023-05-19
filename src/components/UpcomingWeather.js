import React from "react";
import { StyleSheet, SafeAreaView, Text, FlatList, View } from "react-native";
import { Feather } from '@expo/vector-icons'


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

const Item = (props) => {
  const { dt_txt, min, max, condition } = props
  return (
    <View>
      <Feather name={'sun'} size={50} color={'white'}/>
      <Text>{dt_txt}</Text>
      <Text>{min}</Text>
      <Text>{max}</Text>
    </View>
  )
}

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item 
      condition={item.weather[0].main} 
      dt_txt={item.dt_txt} 
      min={item.main.temp_min} 
      max={item.main.temp_max} 
    />
  )
  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming Weather</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
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