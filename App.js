import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import HomeScreen from './src/screens/Home/HomeScreen';
import CategoryScreen from './src/screens/Category/CategoryScreen';
import ProductScreen from './src/screens/Product/ProductScreen';
import CartScreen from './src/screens/Cart/CartScreen';
import LoginScreen from './src/screens/Login/LoginScreen';
import RegisterScreen from './src/screens/Register/RegisterScreen';
import PaymentScreen from './src/screens/Payment/PaymentScreen';
import OrderScreen from './src/screens/Order/OrderScreen';

import cores from './src/util/cores';
import HeaderCartButton from './src/components/HeaderCartButton';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: cores.marrom,
    accent: cores.rosa,
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
  },
  headerRight: () => <HeaderCartButton />
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
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={headerOptions}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={headerOptions}
          />
          <Stack.Screen
            name="Cadastro"
            component={RegisterScreen}
            options={headerOptions}
          />
          <Stack.Screen
            name="Pagamento"
            component={PaymentScreen}
            options={headerOptions}
          />
          <Stack.Screen
            name="Resumo"
            component={OrderScreen}
            options={headerOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider >
  );
}