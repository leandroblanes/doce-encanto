import { useEffect, useState } from "react";
import BaseScreen from "../BaseScreen";
import Title from "../../components/Title";

import cartService from "../../services/cartService";
import eventService, { CART_UPDATED, LOGIN } from "../../services/eventService";
import sessionService from "../../services/sessionService";

import ItemList from "./ItemList";
import { StyleSheet, Text, View } from "react-native";
import Currency from "../../components/Currency";
import colors from "../../util/colors";
import { Button } from "react-native-paper";

const styles = StyleSheet.create({
    totalContainer: {
        flexDirection: 'row'
    },
    totalText: {
        flex: 1,
        textAlign: 'right',
        paddingRight: 10,
        fontSize: 18,
        color: colors.marrom
    },
    totalValue: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.marrom
    },
    button: {
        marginTop: 10
    }
})

function CartScreen({ navigation }) {
    const [itemList, setItemList] = useState([...cartService.items])
    const [totalPrice, setTotalPrice] = useState(cartService.totalPrice)
    const [logged, setLogged] = useState(sessionService.logged)

    useEffect(() => {
        const cartUpdatedId = eventService.subscribe(CART_UPDATED, () => {
            setItemList([...cartService.items])
            setTotalPrice(cartService.totalPrice)
        })

        const loginId = eventService.subscribe(LOGIN, () => {
            setLogged(sessionService.logged)
        })

        return () => {
            eventService.unsubuscribe(cartUpdatedId)
            eventService.unsubuscribe(loginId)
        }
    }, [])

    return (
        <BaseScreen>
            <Title text="Meu Carrinho" />
            <ItemList navigation={navigation} itemList={itemList} />
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total</Text>
                <Currency style={styles.totalValue} value={totalPrice} />
            </View>
            <Button style={styles.button}
                mode="contained"
                onPress={() => navigation.popToTop()}
            >
                Adicionar mais itens
            </Button>
            <Button
                style={styles.button}
                mode="contained"
                onPress={() => navigation.navigate(!logged ? 'Login' : 'Payment')}
            >
                Finalizar compra
            </Button>
        </BaseScreen>
    )
}

export default CartScreen