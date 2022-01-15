import { useState, useEffect } from "react"
import { View, Text } from 'react-native'

import eventService, { LOAD, LOGIN, LOGOUT } from "../../services/eventService"
import sessionService from "../../services/sessionService"

import BaseScreen from "../BaseScreen"
import Title from "../../components/Title"
import OrderList from "./OrderList"

function OrdersScreen({ navigation }) {
    const [orders, setOrders] = useState(sessionService.orders)
    const [user, setUser] = useState(sessionService.user)
    const [logged, setLogged] = useState(sessionService.logged)

    useEffect(() => {
        const loadId = eventService.subscribe(LOAD, () => {
            setOrders([...sessionService.orders])
        })

        const loginId = eventService.subscribe(LOGIN, () => {
            setUser(sessionService.user)
            setLogged(sessionService.logged)
        })

        const logoutId = eventService.subscribe(LOGOUT, () => {
            setUser(null)
            setLogged(false)
        })

        if (!logged)
            navigation.navigate('Login', {
                redirect: 'Orders'
            })

        return () => {
            eventService.unsubuscribe(loadId)
            eventService.unsubuscribe(loginId)
            eventService.unsubuscribe(logoutId)
        }
    })

    if (!user)
        return null

    return (
        <BaseScreen hideUser>
            <Title text="Pedidos" />
            <OrderList orderList={orders.filter(el => el.userId == user.id)} navigation={navigation} />
        </BaseScreen>
    )
}

export default OrdersScreen