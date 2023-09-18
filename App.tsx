import React from 'react';
import {StyleSheet} from 'react-native';
import AppNavigation from './src/navigation/App';

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return <AppNavigation />;
}

export default App;
