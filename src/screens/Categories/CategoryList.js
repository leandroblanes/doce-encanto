import { StyleSheet, View } from "react-native"
import Category from "./Category";

const styles = StyleSheet.create({
});

function CategoryList({ categoryList, navigation }) {
    if (!categoryList)
        return null

    return (
        <View>
            {categoryList.map(el => <Category key={el.id} category={el} navigation={navigation} />)}
        </View >
    )
}

export default CategoryList