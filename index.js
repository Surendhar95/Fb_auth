import { AppRegistry } from 'react-native';
import Auth from './src/auth';
import Entry from './src/Entry'
import { StackNavigator } from 'react-navigation';

const App = StackNavigator ({
    Auth: {screen: Auth},
    Entry: {screen: Entry}
})

AppRegistry.registerComponent('AwesomeProject', () => App);
