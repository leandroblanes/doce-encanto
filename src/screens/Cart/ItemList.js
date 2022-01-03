import { View, StyleSheet, Total } from "react-native"
import Item from "./Item"

const styles = StyleSheet.create({
    list: {
        borderTopColor: '#ccc',
        borderTopWidth: 1,
        borderStyle: "solid",
    }
});

function ItemList({ itemList, navigation }) {
    return (
        <View style={styles.list}>
            {itemList.map(el => <Item key={el.productId} item={el} navigation={navigation} />)}
        </View>
    )
}

export default ItemList