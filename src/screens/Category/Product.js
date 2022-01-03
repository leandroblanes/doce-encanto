import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native"
import Currency from "../../components/Currency";

const styles = StyleSheet.create({
    item: {
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        borderStyle: "solid",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    description: {
        flex: 1,
        paddingRight: 10
    },
    price: {
        width: 100,
        textAlign: 'right'
    }
});

function Product({ product, navigation }) {
    const navigate = () => {
        navigation.navigate('Product', {
            product
        })
    }

    return (
        <TouchableWithoutFeedback onPress={navigate}>
            <View style={styles.item}>
                <View style={styles.description}>
                    <Text>{product.name}</Text>
                </View>
                <View style={styles.price}>
                    <Currency style={{ textAlign: "right" }} value={product.price} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Product