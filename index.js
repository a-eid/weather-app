import {AppRegistry, LogBox} from 'react-native';
import {App} from './src/navigation/entry';
import {name as appName} from './app.json';

LogBox.ignoreLogs([
  // RN issue
  'Require cycle: node_modules/react-native/Libraries/Network/fetch.js -> node_modules/whatwg-fetch/dist/fetch.umd.js -> node_modules/react-native/Libraries/Network/fetch.js',
]);

AppRegistry.registerComponent(appName, () => App);
