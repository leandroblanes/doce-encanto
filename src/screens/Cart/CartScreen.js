import { useEffect, useState } from "react";
import BaseScreen from "../BaseScreen";
import Title from "../../components/Title";

import cartService from "../../services/cartService";
import eventService, { CART_UPDATED } from "../../services/eventService";

import ItemList from "./ItemList";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Currency from "../../components/Currency";
import cores from "../../util/cores";
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
        color: cores.marrom
    },
    totalValue: {
        fontSize: 18,
        fontWeight: "bold",
        color: cores.marrom
    },
    button: {
        marginTop: 10
    }
})

function CartScreen({ navigation }) {
    const [itemList, setItemList] = useState([...cartService.items])
    const [totalPrice, setTotalPrice] = useState(cartService.totalPrice)

    useEffect(() => {
        const subscriberId = eventService.subscribe(CART_UPDATED, () => {
            setItemList([...cartService.items])
            setTotalPrice(cartService.totalPrice)
        })

        return () => {
            eventService.unsubuscribe(subscriberId)
        }
    }, [])

    return (
        <ScrollView>
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
                    onPress={() => navigation.navigate('Login')}
                >
                    Finalizar compra
                </Button>
            </BaseScreen>
        </ScrollView>
    )
}

export default CartScreen