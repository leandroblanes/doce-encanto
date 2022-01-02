import { View, StyleSheet } from "react-native"
import Product from "./Product"

const styles = StyleSheet.create({
    list: {
        borderTopColor: '#ccc',
        borderTopWidth: 1,
        borderStyle: "solid",
    }
});

function ProductList({ productList, navigation }) {
    if (!productList)
        return null

    return (
        <View style={styles.list}>
            {productList.map(el => <Product navigation={navigation} key={el.id} product={el} />)}
        </View>
    )
}

export default ProductList