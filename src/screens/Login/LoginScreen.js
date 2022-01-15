import BaseScreen from "../BaseScreen";
import Title from "../../components/Title";
import { StyleSheet, Text, View, TextInput as OriginalTextInput } from "react-native";
import { TextInput, Button, Snackbar } from 'react-native-paper';
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

function LoginScreen({ navigation, route }) {
    const { redirect } = route.params
    const [data, setData] = useState({
        email: 'john@gmail.com',
        password: '123'
    })
    const [msg, setMsg] = useState(null)

    useEffect(() => {

    })

    const handleChange = (field, value) => {
        setData({
            ...data,
            [field]: value
        })
    }

    const login = async () => {
        if (!data.email || !data.password) {
            setMsg('Informe o e-mail e a senha para entrar')
            return
        }

        if (await sessionService.login(data.email, data.password)) {
            if (redirect)
                navigation.navigate(redirect)
            else
                navigation.navigate('Payment')
        } else {
            setMsg('Dados de acesso inválidos')
        }
    }

    const register = () => {
        navigation.navigate('Register')
    }

    return (
        <BaseScreen>
            <Snackbar
                visible={msg != null}
                onDismiss={() => setMsg(null)}
                duration={3000}
            >
                {msg}
            </Snackbar>
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
                    <OriginalTextInput keyboardType="number-pad" secureTextEntry={true} {...props} />
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