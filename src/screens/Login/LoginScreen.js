import BaseScreen from "../BaseScreen";
import Title from "../../components/Title";
import { StyleSheet, Text, View, ScrollView, TextInput as OriginalTextInput } from "react-native";
import { TextInput, Button } from 'react-native-paper';
import sessionService from "../../services/sessionService";
import { useEffect, useState } from "react";

const styles = StyleSheet.create({
    field: {
        marginBottom: 10
    },
    hrContainer: {
        height: 50,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center'
    },
    hr: {
        width: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderStyle: 'solid'
    }
})

function LoginScreen({ navigation }) {
    const [data, setData] = useState({})

    useEffect(() => {

    })

    const handleChange = (field, value) => {
        setData({
            ...data,
            [field]: value
        })
    }

    const login = () => {

    }

    const register = () => {
        navigation.navigate('Cadastro')
    }

    return (
        <BaseScreen>
            <Title text="Identifique-se" />
            <TextInput
                label="Email"
                value={data.email}
                onChangeText={text => handleChange('email', text)}
                style={styles.field}
            />
            <TextInput
                label="Senha"
                render={props =>
                    <OriginalTextInput secureTextEntry={true} {...props} />
                }
                value={data.password}
                onChangeText={text => handleChange('password', text)}
                style={styles.field}
            />
            <Button mode="contained" onPress={login}>Entrar</Button>
            <View style={styles.hrContainer}>
                <View style={styles.hr}></View>
            </View>
            <Button mode="contained" onPress={register}>Criar uma conta</Button>
        </BaseScreen>
    )
}

export default LoginScreen