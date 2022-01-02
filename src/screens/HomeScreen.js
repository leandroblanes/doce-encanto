import { StyleSheet, Text, View, Button } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button onPress={() => navigation.navigate('category')} title="Categoria" />
        </View>
    )
}

export default HomeScreen