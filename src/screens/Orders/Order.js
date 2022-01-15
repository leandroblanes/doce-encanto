import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native"


import DateTime from '../../components/DateTime'
import Currency from "../../components/Currency";
import colors from "../../util/colors";

const styles = StyleSheet.create({
    item: {
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        borderStyle: 'solid'
    },
    orderNumberContainer: {
        flexDirection: 'row',
        marginBottom: 10
    },
    orderNumberContainerItem: {
        flex: 1
    },
    date: {
        color: '#999'
    }
});

function Order({ order, navigation }) {
    const navigate = () => {
        navigation.navigate('Order', { orderId: order.id })
    }

    return (
        <TouchableWithoutFeedback onPress={navigate}>
            <View style={styles.item}>
                <View style={styles.orderNumberContainer}>
                    <View style={styles.orderNumberContainerItem}>
                        <Text style={{ color: colors.marrom }}>Pedido Nº <Text style={{ fontWeight: 'bold' }}>{order.id}</Text></Text>
                    </View>
                    <View style={styles.orderNumberContainerItem}>
                        <Currency value={order.totalPrice} style={{ textAlign: 'right' }} />
                    </View>
                </View>
                <DateTime style={styles.date} value={order.date} showMinutes />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Order