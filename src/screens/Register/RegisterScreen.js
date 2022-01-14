import BaseScreen from "../BaseScreen";
import Title from "../../components/Title";
import { StyleSheet, Text, View, ScrollView } from "react-native";
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
        email: 'lblanes@gmail.com',
        name: 'Leandro Blanes',
        phone: '(12) 99130-9234',
        password: '123'
    })
    const [msg, setMsg] = useState(null)

    useEffect(() => {
    }, [])

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
            navigation.navigate('Pagamento')
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
            <ScrollView>

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
            </ScrollView>
        </BaseScreen>
    )
}

export default RegisterScreen