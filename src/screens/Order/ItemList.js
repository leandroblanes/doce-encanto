import { View, StyleSheet } from "react-native"
import Item from "./Item";

const styles = StyleSheet.create({
    list: {
        borderTopColor: '#ccc',
        borderTopWidth: 1,
        borderStyle: "solid",
    }
});

function ItemList({ itemList, navigation }) {
    if (!itemList)
        return null

    return (
        <View style={styles.list}>
            {itemList.map(el => <Item navigation={navigation} key={el.productId} item={el} />)}
        </View>
    )
}

export default ItemList