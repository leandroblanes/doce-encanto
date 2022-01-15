import { View, StyleSheet } from "react-native"
import Order from "./Order"

const styles = StyleSheet.create({
    list: {

    }
})

function OrderList({ orderList, navigation }) {
    if (!orderList)
        return null

    return (
        <View style={styles.list}>
            {orderList
                .sort((a, b) => b.id - a.id)
                .map(el =>
                    <Order navigation={navigation} key={el.productId} order={el} />
                )}
        </View>
    )
}

export default OrderList