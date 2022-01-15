import React, { useMemo } from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";


import colors from "../util/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.marrom,
        flexDirection: 'row',
        height: 80,
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

function Item({ text, icon, onPress, disabled }) {
    const color = useMemo(() => disabled ? '#FFFFFF66' : 'white', [disabled])

    return (
        <TouchableWithoutFeedback onPress={!disabled ? onPress : null}>
            <View style={styles.item}>
                <MaterialCommunityIcons name={icon} color={color} size={26} />
                <Text style={{ color }}>
                    {text}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

function BottomBar() {
    const navigation = useNavigation()

    const navigate = (name) => {
        navigation.reset({
            index: 0,
            routes: [{ name }]
        })
    }

    return (
        <View style={styles.container}>
            <Item text="Home" icon="home" onPress={() => navigate('Categories')} />
            <Item text="Pedidos" icon="cart" onPress={() => navigate('Orders')} />
            <Item text="Perfil" icon="account" onPress={() => navigate('Profile')} />
        </View>
    )
}

export default BottomBar