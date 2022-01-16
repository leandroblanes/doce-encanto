import BaseScreen from "../BaseScreen"
import Title from "../../components/Title"
import { StyleSheet, Text, View } from "react-native"
import React, { useEffect, useState } from "react"
import ItemList from "./ItemList"
import Currency from "../../components/Currency"

import orderService from "../../services/orderService"
import sessionService from "../../services/sessionService"
import colors from "../../util/colors"
import DateTime from "../../components/DateTime"

const styles = StyleSheet.create({
    orderNumberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    orderNumberContainerItem: {
        flex: 1
    },
    orderNumber: {
        color: colors.marrom,
        fontSize: 18,
    },
    date: {
        textAlign: 'right',
        color: '#999'
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
        orderService.detail(orderId, sessionService.token).then(order => {
            setOrder(order)
        })
    }, [])

    return (
        <BaseScreen>
            <Title text="Resumo" />
            {order && (
                <React.Fragment>
                    <View style={styles.orderNumberContainer}>
                        <View style={styles.orderNumberContainerItem}>
                            <Text style={styles.orderNumber}>Pedido Nº <Text style={styles.bold}>{orderId}</Text></Text>
                        </View>
                        <View style={styles.orderNumberContainerItem}>
                            <DateTime style={styles.date} value={order.date} showMinutes />
                        </View>
                    </View>
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
                </React.Fragment>
            )}
        </BaseScreen>
    )
}

export default OrderScreen