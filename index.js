import {AppRegistry, LogBox} from 'react-native';
import {App} from './src/navigation/entry';
import {name as appName} from './app.json';

LogBox.ignoreAllLogs();
// LogBox.ignoreLogs([
//   // RN issue
//   'Require cycle: node_modules/react-native/Libraries/Network/fetch.js -> node_modules/whatwg-fetch/dist/fetch.umd.js -> node_modules/react-native/Libraries/Network/fetch.js',
//   // RN maps issue.
//   'Require cycle: node_modules/react-native-maps/lib/components/MapView.js -> node_modules/react-native-maps/lib/components/Geojson.js -> node_modules/react-native-maps/lib/components/MapView.js',
// ]);

AppRegistry.registerComponent(appName, () => App);
