import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native"

import colors from "../util/colors";
import sessionService from "../services/sessionService";
import eventService, { LOGIN, LOGOUT } from "../services/eventService";
import BottomBar from "../components/BottomBar";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%'
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

function BaseScreen({ children, hideUser }) {
    const [logged, setLogged] = useState(sessionService.logged)
    const [user, setUser] = useState(sessionService.user)

    useEffect(() => {
        const loginId = eventService.subscribe(LOGIN, () => {
            setLogged(sessionService.logged)
            setUser({ ...sessionService.user })
        })

        const logoutId = eventService.subscribe(LOGOUT, () => {
            setLogged(false)
            setUser(null)
        })

        return () => {
            eventService.unsubuscribe(loginId)
            eventService.unsubuscribe(logoutId)
        }
    }, [])

    return (
        <View style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1
        }}>
            <View style={{
                flex: 1
            }}>
                <ScrollView>
                    {logged && !hideUser && (
                        <View style={styles.top}>
                            <Text style={styles.topText}>{user?.name}</Text>
                        </View>
                    )}
                    <View style={styles.content}>
                        {children}
                    </View>
                </ScrollView>
            </View>
            <BottomBar />
        </View>
    )
}

export default BaseScreen