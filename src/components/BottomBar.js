import React, { useState, useEffect } from "react";
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

function Item({ text, icon, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.item}>
                <MaterialCommunityIcons name={icon} color="white" size={26} />
                <Text style={{ color: 'white' }}>
                    {text}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

function BottomBar() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Item text="Home" icon="home" onPress={() => navigation.replace('Categories')} />
            <Item text="Pedidos" icon="cart" onPress={() => navigation.replace('Orders')} />
            <Item text="Perfil" icon="account" onPress={() => navigation.replace('Profile')} />
        </View>
    )
}

export default BottomBar