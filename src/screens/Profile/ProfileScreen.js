import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

import BaseScreen from "../BaseScreen"
import Title from "../../components/Title"
import Item from "./Item"

import sessionService from "../../services/sessionService"
import eventService, { LOGIN, LOGOUT } from "../../services/eventService";

const styles = StyleSheet.create({
    fields: {
        marginBottom: 20
    }
})

function ProfileScreen({ navigation }) {
    const [client, setClient] = useState(sessionService.client)
    const [logged, setLogged] = useState(sessionService.logged)

    useEffect(() => {
        const loginId = eventService.subscribe(LOGIN, () => {
            setClient(sessionService.client)
            setLogged(sessionService.logged)
        })

        const logoutId = eventService.subscribe(LOGOUT, () => {
            setClient(null)
            setLogged(false)
        })

        if (!logged)
            navigation.navigate('Login', {
                redirect: 'Profile'
            })

        return () => {
            eventService.unsubuscribe(loginId)
            eventService.unsubuscribe(logoutId)
        }
    }, [])

    const sair = () => {
        sessionService.logout()
        navigation.reset({
            index: 0,
            routes: [{ name: 'Categories' }]
        })
    }

    if (!client)
        return null

    return (
        <BaseScreen hideUser>
            <Title text="Perfil" />
            <View style={styles.fields}>
                <Item label="Nome" text={client.name} />
                <Item label="Email" text={client.email} />
                <Item label="Telefone" text={client.phone} />
            </View>
            <Button mode="contained" onPress={sair}>Sair</Button>
        </BaseScreen>
    )
}

export default ProfileScreen