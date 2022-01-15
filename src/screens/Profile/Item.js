import { View, Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        borderStyle: 'solid'

    },
    label: {
        fontSize: 16,
        color: '#999'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})

function Item({ label, text }) {
    return (
        <View style={styles.item}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

export default Item