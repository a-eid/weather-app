import * as React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationProp} from '@react-navigation/core';
import {Location} from '../hooks';

export function WeatherMap({
  route: {
    params: {location},
  },
}: {
  navigation: NavigationProp<any>;
  route: {params: {location: Location}};
}) {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.coord.lat,
          longitude: location.coord.lon,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          title={location.name}
          coordinate={{
            latitude: location.coord.lat,
            longitude: location.coord.lon,
          }}
        />
      </MapView>
      <View style={styles.info}>
        <Text>{location.name}</Text>
        <Text>{location.temp.toFixed(2)}</Text>
        <Text>{location.weather[0].description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  map: {flex: 5},
  info: {flex: 3, padding: 12},
});
