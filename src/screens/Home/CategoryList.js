import { StyleSheet, View } from "react-native"
import Category from "./Category";

const styles = StyleSheet.create({
    categoriesList: {
        width: 320,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: "wrap"
    }
});

function CategoryList({ categoryList, navigation }) {
    if (!categoryList)
        return null

    return (
        <View style={styles.categoriesList}>
            {categoryList.map(el => <Category key={el.id} category={el} navigation={navigation} />)}
        </View >
    )
}

export default CategoryList