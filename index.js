import { AppRegistry } from 'react-native';
import Auth from './src/auth';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator ({
    Auth: {screen: Auth}
})

AppRegistry.registerComponent('AwesomeProject', () => App);
