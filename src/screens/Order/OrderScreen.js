import BaseScreen from "../BaseScreen"
import Title from "../../components/Title"
import { StyleSheet, Text, View } from "react-native"
import { RadioButton, TextInput, Button } from "react-native-paper"
import React, { useEffect, useState } from "react"
import ItemList from "./ItemList"
import Currency from "../../components/Currency"

import sessionService from "../../services/sessionService"
import eventService, { CART_UPDATED } from "../../services/eventService"
import colors from "../../util/colors"

const styles = StyleSheet.create({
    orderNumber: {
        color: colors.marrom,
        fontSize: 18,
        marginBottom: 10
    },
    bold: {
        fontWeight: 'bold'
    },
    right: {
        textAlign: 'right'
    },
    total: {
        textAlign: 'right',
        fontSize: 20,
        marginTop: 5,
        color: colors.marrom
    },
    troco: {
        textAlign: 'right',
        marginTop: 5,
        color: colors.marrom
    }
})

function OrderScreen({ navigation, route }) {
    const { orderId } = route.params
    const [order, setOrder] = useState()

    useEffect(() => {
        sessionService.findOrder(orderId).then(setOrder)
    }, [])

    return (
        <BaseScreen>
            <Title text="Resumo" />
            <Text style={styles.orderNumber}>Pedido Nº <Text style={styles.bold}>{orderId}</Text></Text>
            <ItemList itemList={order?.items} />
            <View>
                <Text style={styles.total}>
                    <Text>Total:    </Text>
                    <Text style={styles.bold}>
                        <Currency value={order.totalPrice} />
                    </Text>
                </Text>
                {order.wantChange && (
                    <Text style={styles.troco}>
                        Trazer troco para <Text style={styles.bold}><Currency value={order.change} /></Text>
                    </Text>
                )}
            </View>
        </BaseScreen>
    )
}

export default OrderScreen