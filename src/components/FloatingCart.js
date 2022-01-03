import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Currency from "./Currency";
import cartService from "../services/cartService";
import eventService, { CART_UPDATED } from "../services/eventService";

function FloatingCart() {
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setTotalQuantity(cartService.totalQuantity)
        setTotalPrice(cartService.totalPrice)

        const subscriberId = eventService.subscribe(CART_UPDATED, () => {
            setTotalQuantity(cartService.totalQuantity)
            setTotalPrice(cartService.totalPrice)
        })

        return () => {
            eventService.unsubuscribe(subscriberId)
        }
    }, [])

    return (
        <View>
            <Text>{totalQuantity}</Text>
            <Currency value={totalPrice} />
        </View>
    )
}

export default FloatingCart