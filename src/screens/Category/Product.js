import { StyleSheet, View, Text } from "react-native"
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
        flex: 1
    },
    price: {
        width: 100,
        textAlign: 'right'
    }
});

function Product({ product, navigation }) {
    return (
        <View style={styles.item}>
            <View style={styles.description}>
                <Text>{product.name}</Text>
            </View>
            <View style={styles.price}>
                <Currency textAlign="right" value={product.price} />
            </View>
        </View>
    )
}

export default Product