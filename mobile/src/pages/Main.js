import React, { useState, useEffect } from 'react'
import { StyleSheet, Image } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

function Main() {
  const [currentRegion, setCurrentregion] = useState(null)

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync()

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        })

        const { latitude, longitude } = coords

        setCurrentregion({
          latitude,
          longitude,
          latitudeDelta: 0.0722,
          longitudeDelta: 0.0321,
        })

      }
    }

    loadInitialPosition()
  }, [])

  if (!currentRegion) {
    return null
  }

  return (
    <MapView initialRegion={ currentRegion } style={ styles.map } >
      <Marker coordinate={ { latitude: -10.323705, longitude: -36.577395} }>
        <Image style={styles.avatar} source={{ uri: 'https://avatars1.githubusercontent.com/u/58692651?s=460&v=4' }} />
      </Marker>
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#FF5733',
  }
})

export default Main
