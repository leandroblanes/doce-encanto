import { StyleSheet, ImageBackground, TouchableWithoutFeedback, View, Text } from "react-native"

const styles = StyleSheet.create({
    category: {
        width: 150,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20
    }
});

function Category({ category, navigation }) {

    const image = {
        uri: category.image
    }

    const navigate = () => {

        navigation.navigate('Category', {
            category
        })
    }

    return (
        <TouchableWithoutFeedback onPress={navigate}>
            <ImageBackground source={image} style={styles.category} />
        </TouchableWithoutFeedback>
    )
}

export default Category