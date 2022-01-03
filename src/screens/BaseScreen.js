import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

function BaseScreen({ children }) {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

export default BaseScreen