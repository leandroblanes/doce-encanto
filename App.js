import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import NavigationStack from './src/navigation/NavigationStack';

import colors from './src/util/colors';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.marrom,
    accent: colors.rosa,
  }
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </PaperProvider>
  );
}