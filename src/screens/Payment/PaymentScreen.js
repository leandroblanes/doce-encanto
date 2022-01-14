import BaseScreen from "../BaseScreen"
import Title from "../../components/Title"
import { StyleSheet, Text, View, ScrollView } from "react-native"
import { RadioButton, TextInput, Button } from "react-native-paper"
import React, { useEffect, useState } from "react"
import cores from "../../util/cores"
import cartService from "../../services/cartService"
import eventService, { CART_UPDATED } from "../../services/eventService"
import sessionService from "../../services/sessionService"
import { formatarMoeda } from "../../util/Util"
import CurrencyInput from "../../components/CurrencyInput"

const styles = StyleSheet.create({
    radioGroup: {
        flexDirection: "row"
    },
    radioItem: {
        flexDirection: "row",
        alignItems: 'center'
    },
    field: {
        marginBottom: 10
    },
})

function Payment({ navigation }) {
    const [data, setData] = useState({
        wantChange: false,
        change: 0
    })
    const [totalPrice, setTotalPrice] = useState(cartService.totalPrice)

    useEffect(() => {
        const cartUpdatedId = eventService.subscribe(CART_UPDATED, () => {
            setTotalPrice(cartService.totalPrice)
        })

        return () => eventService.unsubuscribe(cartUpdatedId)
    }, [])

    const handleChange = (field, value) => {
        setData({
            ...data,
            [field]: value
        })
    }

    const save = async () => {
        const orderId = await sessionService.saveOrder(data.wantChange, data.change)
        navigation.navigate('Resumo', { orderId })
    }

    return (
        <BaseScreen>
            <ScrollView>
                <Title text="Forma de pagamento" />
                <TextInput
                    label="Total do Pedido"
                    value={formatarMoeda(totalPrice)}
                    style={styles.field}
                    disabled={true}
                />
                <Text>Precisa de troco?</Text>
                <RadioButton.Group
                    onValueChange={value => handleChange('wantChange', value)}
                    value={data.wantChange}
                >
                    <View style={styles.radioGroup}>
                        <View style={styles.radioItem}>
                            <RadioButton
                                value={true}
                                color={cores.marrom}
                            />
                            <Text>Sim</Text>
                        </View>
                        <View style={{ ...styles.radioItem, marginLeft: 10 }}>
                            <RadioButton
                                value={false}
                                color={cores.marrom}
                            />
                            <Text>Não</Text>
                        </View>
                    </View>
                </RadioButton.Group>
                {data.wantChange && (
                    <React.Fragment>
                        <TextInput
                            label="Pra quanto?"
                            value={data.change}
                            onChangeText={text => handleChange('change', text)}
                            style={styles.field}
                            render={props =>
                                <CurrencyInput {...props} />
                            }
                        />
                        <TextInput
                            label="Valor do troco"
                            value={data.change > 0 ? formatarMoeda(data.change - totalPrice) : '0,00'}
                            style={styles.field}
                            disabled
                        />
                    </React.Fragment>
                )}
                <Button
                    mode="contained"
                    onPress={save}
                    disabled={data.wantChange && data.change < totalPrice}
                    style={{
                        marginTop: 20
                    }}
                >Finalizar</Button>
            </ScrollView>
        </BaseScreen>
    )
}

export default Payment