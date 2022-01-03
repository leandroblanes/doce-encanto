import { View, Text, StyleSheet } from "react-native"
import Currency from "../../components/Currency"
import Quantity from "../../components/QuantitySelector"

import cartService from "../../services/cartService"

const styles = StyleSheet.create({
    item: {
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        borderStyle: "solid",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    description: {
        flex: 1,
        paddingRight: 10
    },
    priceContainer: {
        width: 100
    },
    price: {
        textAlign: 'center',
        marginTop: 5
    }
});

function Item({ item, navigation }) {

    const changeQuantity = (quantity) => {
        if (quantity == 0)
            cartService.remove(item.productId)
        else
            cartService.changeQuantity(item.productId, quantity)
    }

    return (
        <View style={styles.item}>
            <View style={styles.description}>
                <Text>{item.product.name}</Text>
            </View>
            <View style={styles.priceContainer}>
                <Quantity quantity={item.quantity} onChange={changeQuantity} />
                <Currency style={styles.price} value={item.product.price * item.quantity} />
            </View>
        </View>
    )
}

export default Item