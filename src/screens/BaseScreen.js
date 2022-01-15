import { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native"
import { useNavigation } from "@react-navigation/native";
import colors from "../util/colors";
import sessionService from "../services/sessionService";
import eventService, { LOGIN } from "../services/eventService";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        backgroundColor: colors.marromClaro,
        padding: 5,
    },
    topText: {
        color: colors.marrom,
        textAlign: "center"
    },
    content: {
        padding: 20
    }
});

function BaseScreen({ children }) {
    const [logged, setLogged] = useState(sessionService.logged)
    const [user, setUser] = useState(sessionService.user)
    const navigation = useNavigation()

    useEffect(() => {
        const id = eventService.subscribe(LOGIN, () => {
            setLogged(sessionService.logged)
            setUser({ ...sessionService.user })
        })

        return () => eventService.unsubuscribe(id)
    }, [])

    return (
        <View style={styles.container}>
            {logged && (
                <View style={styles.top}>
                    <Text style={styles.topText}>{user?.name}</Text>
                </View>
            )}
            <View style={styles.content}>
                {children}
            </View>
        </View>
    )
}

export default BaseScreen