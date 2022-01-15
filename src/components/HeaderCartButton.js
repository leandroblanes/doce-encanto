import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableWithoutFeedback } from 'react-native';

import cartService from '../services/cartService'
import eventService, { CART_UPDATED } from '../services/eventService'

function HeaderCartButton() {
    const navigation = useNavigation()
    const [cartButtonVisible, setCartButtonVisible] = useState(cartService.totalQuantity > 0)

    useEffect(() => {
        const subscriberId = eventService.subscribe(CART_UPDATED, () => {
            setCartButtonVisible(cartService.totalQuantity > 0)
        })

        return () => {
            eventService.unsubuscribe(subscriberId)
        }
    }, [])

    const navigateToCart = () => {
        navigation.navigate('Cart')
    }

    return cartButtonVisible ?
        <TouchableWithoutFeedback onPress={navigateToCart}>
            <Icon name="shopping-cart" size={25} color={"#fff"} style={{ marginRight: 20 }} />
        </TouchableWithoutFeedback> :
        null

}

export default HeaderCartButton