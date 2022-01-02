import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import HomeScreen from './src/screens/Home/HomeScreen';
import CategoryScreen from './src/screens/Category/CategoryScreen';
import ProductScreen from './src/screens/Product/ProductScreen';

import cores from './src/util/cores';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: cores.marrom,
    accent: 'yellow',
  }
}

const headerOptions = {
  title: 'Doce Encanto',
  headerStyle: {
    backgroundColor: cores.marrom
  },
  headerTintColor: '#fff',
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              ...headerOptions
            }}
          />
          <Stack.Screen
            name="Category"
            component={CategoryScreen}
            options={headerOptions}
          />
          <Stack.Screen
            name="Product"
            component={ProductScreen}
            options={headerOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}