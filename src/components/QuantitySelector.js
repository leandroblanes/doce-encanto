import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import cores from '../util/cores'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        overflow: 'hidden'
    },
    minusButton: {
        height: 32,
        width: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        borderStyle: 'solid',
        backgroundColor: cores.marrom,
    },
    buttonText: {
        color: '#fff',
    },
    quantity: {
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    plusButton: {
        height: 32,
        width: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
        borderStyle: 'solid',
        backgroundColor: cores.marrom,
    },
})

function Quantity({ onChange, quantity: initialQuantity }) {
    const [quantity, setQuantity] = useState(initialQuantity)

    const changeAndNotify = (quantity) => {
        setQuantity(quantity)
        onChange && onChange(quantity)
    }

    const minus = () => {
        if (quantity > 0)
            changeAndNotify(quantity - 1)
    }

    const plus = () => {
        changeAndNotify(quantity + 1)
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={minus}>
                <View style={styles.minusButton}>
                    <Text style={styles.buttonText}>-</Text>
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.quantity}>
                <Text>{quantity}</Text>
            </View>
            <TouchableWithoutFeedback onPress={plus}>
                <View style={styles.plusButton}>
                    <Text style={styles.buttonText}>+</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Quantity