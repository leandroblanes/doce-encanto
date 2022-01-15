import BaseScreen from "../BaseScreen";
import Title from "../../components/Title";
import { StyleSheet } from "react-native";
import PhoneInput from "../../components/PhoneInput";
import NumberInput from "../../components/NumberInput";
import { TextInput, Button, Snackbar } from 'react-native-paper';
import sessionService from "../../services/sessionService";
import { useEffect, useState } from "react";

const styles = StyleSheet.create({
    field: {
        marginBottom: 10
    },
})

function RegisterScreen({ navigation }) {
    const [data, setData] = useState({
        email: '',
        name: '',
        phone: '',
        password: ''
    })
    const [msg, setMsg] = useState(null)

    const handleChange = (field, value) => {
        setData({
            ...data,
            [field]: value
        })
    }

    const save = async () => {
        if (!data.email) {
            setMsg('Todos os campos são obrigatórios')
            return
        }

        if (!data.name) {
            setMsg('Todos os campos são obrigatórios')
            return
        }

        if (!data.phone) {
            setMsg('Todos os campos são obrigatórios')
            return
        }

        if (!data.password) {
            setMsg('Todos os campos são obrigatórios')
            return
        }

        try {
            await sessionService.register(data.email, data.name, data.phone, data.password)
            await sessionService.login(data.email, data.password)
            navigation.popToTop()
            navigation.navigate('Payment')
        } catch (message) {
            console.log(message)
        }

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

            <Title text="Criar uma conta" />
            <TextInput
                label="E-mail"
                value={data.email}
                onChangeText={text => handleChange('email', text)}
                style={styles.field}
            />
            <TextInput
                label="Nome"
                value={data.name}
                onChangeText={text => handleChange('name', text)}
                style={styles.field}
            />
            <TextInput
                label="Telefone"
                value={data.phone}
                render={props =>
                    <PhoneInput {...props} />
                }
                onChangeText={text => handleChange('phone', text)}
                style={styles.field}
            />
            <TextInput
                label="Senha"
                value={data.password}
                render={props =>
                    <NumberInput {...props} />
                }
                onChangeText={text => handleChange('password', text)}
                style={styles.field}
            />
            <Button mode="contained" onPress={save}>Criar uma conta</Button>
        </BaseScreen>
    )
}

export default RegisterScreen