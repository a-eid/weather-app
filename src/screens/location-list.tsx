import {useNavigation} from '@react-navigation/core';
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';
import {Location, useLocations} from '../hooks';

export function LocationList() {
  const {locations} = useLocations();
  return (
    <FlatList
      data={locations}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
}

const renderItem: ListRenderItem<Location> = ({item}) => {
  return <LocationItem {...item} />;
};

function LocationItem({name, temp, weather, coord}: Location) {
  const navigateion = useNavigation();
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        navigateion.navigate('map', {
          lat: coord.lat,
          lng: coord.lon,
        });
      }}>
      <View>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.status}>{weather[0].description}</Text>
      </View>
      <Text style={styles.temp}>{temp.toFixed(2)}° C</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  title: {fontSize: 18},
  temp: {fontSize: 14},
  status: {
    fontSize: 14,
    marginTop: 10,
  },
});
