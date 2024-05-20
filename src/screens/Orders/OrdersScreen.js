import { useState, useEffect } from "react"

import eventService, { LOAD, LOGIN, LOGOUT } from "../../services/eventService"
import sessionService from "../../services/sessionService"
import orderService from "../../services/orderService"

import BaseScreen from "../BaseScreen"
import Title from "../../components/Title"
import OrderList from "./OrderList"

function OrdersScreen({ navigation }) {
    const [orders, setOrders] = useState(sessionService.orders)
    const [logged, setLogged] = useState(sessionService.logged)

    useEffect(() => {
        orderService.list(sessionService.token).then(orders => {
            setOrders(orders)
        })

        const loginId = eventService.subscribe(LOGIN, () => {
            setLogged(sessionService.logged)
        })

        const logoutId = eventService.subscribe(LOGOUT, () => {
            setLogged(false)
        })

        if (!logged)
            navigation.navigate('Login', {
                redirect: 'Orders'
            })

        return () => {
            eventService.unsubuscribe(loginId)
            eventService.unsubuscribe(logoutId)
        }
    }, [])

    if (!logged)
        return null

    return (
        <BaseScreen hideUser>
            <Title text="Pedidos" />
            <OrderList orderList={orders} navigation={navigation} />
        </BaseScreen>
    )
}

export default OrdersScreen