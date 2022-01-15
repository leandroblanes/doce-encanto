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
        flex: 1,
        paddingRight: 10
    },
    price: {
        width: 100,
        textAlign: 'right'
    },
    right: {
        textAlign: 'right'
    }
});

function Item({ item, navigation }) {

    return (
        <View style={styles.item}>
            <View style={styles.description}>
                <Text>{item.name}</Text>
            </View>
            <View style={styles.price}>
                <Text style={styles.right}>
                    {item.quantity} x <Currency style={{ textAlign: "right" }} value={item.price} />
                </Text>
            </View>
        </View>
    )
}

export default Item