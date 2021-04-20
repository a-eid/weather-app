import * as React from 'react';
import {QueryClientProvider, QueryClient} from 'react-query';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import * as screens from '../screens';

const queryClient = new QueryClient();
const stack = createNativeStackNavigator();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
            name="list"
            component={screens.LocationList}
            options={{title: 'Weather App'}}
          />
          <stack.Screen
            name="map"
            component={screens.WeatherMap}
            options={{title: 'Weather App'}}
          />
        </stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
