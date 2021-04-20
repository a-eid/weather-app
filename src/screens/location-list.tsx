import {useNavigation} from '@react-navigation/core';
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Location, useLocations} from '../hooks';

export function LocationList() {
  const {locations, status} = useLocations();
  return (
    <FlatList
      data={locations}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      ListEmptyComponent={
        <ActivityIndicator
          style={styles.indicator}
          animating={status === 'loading'}
          hidesWhenStopped
        />
      }
    />
  );
}

const renderItem: ListRenderItem<Location> = ({item}) => {
  return <LocationItem {...item} />;
};

function LocationItem(location: Location) {
  const {name, temp, weather} = location;
  const navigateion = useNavigation();
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        navigateion.navigate('map', {
          location,
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
  indicator: {margin: 25},
});
