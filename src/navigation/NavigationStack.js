import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';

import colors from '../util/colors';
import HeaderCartButton from '../components/HeaderCartButton';

import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import CategoryScreen from '../screens/Category/CategoryScreen';
import ProductScreen from '../screens/Product/ProductScreen';
import CartScreen from '../screens/Cart/CartScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';
import PaymentScreen from '../screens/Payment/PaymentScreen';
import OrderScreen from '../screens/Order/OrderScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import OrdersScreen from '../screens/Orders/OrdersScreen';

const Stack = createStackNavigator();

const headerOptions = {
    title: 'Doce Encanto',
    headerStyle: {
        backgroundColor: colors.marrom
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    headerRight: () => <HeaderCartButton />
}

function NavigationStack() {
    return (
        <Stack.Navigator initialRouteName='Categories'>
            <Stack.Screen
                name="Categories"
                component={CategoriesScreen}
                options={headerOptions}
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
                name="Register"
                component={RegisterScreen}
                options={headerOptions}
            />
            <Stack.Screen
                name="Payment"
                component={PaymentScreen}
                options={headerOptions}
            />
            <Stack.Screen
                name="Order"
                component={OrderScreen}
                options={headerOptions}
            />
            <Stack.Screen
                name="Orders"
                component={OrdersScreen}
                options={headerOptions}
            />
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default NavigationStack