import { View } from "react-native"
import Order from "./Order"

function OrderList({ orderList, navigation }) {
    if (!orderList)
        return null

    return (
        <View>
            {orderList
                .sort((a, b) => b.id - a.id)
                .map(el =>
                    <Order navigation={navigation} key={el.id} order={el} />
                )}
        </View>
    )
}

export default OrderList