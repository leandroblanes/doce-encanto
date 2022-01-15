import { StyleSheet, ImageBackground, TouchableWithoutFeedback, View, Text } from "react-native"
import images from '../../util/images';
import colors from "../../util/colors";

const styles = StyleSheet.create({
    category: {
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: colors.marromClaro,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 80,
        height: 80,
        marginRight: 20
    },
    text: {
        fontSize: 20,
        color: colors.marrom
    }
});

function Category({ category, navigation }) {
    const navigate = () => {

        navigation.navigate('Category', {
            category
        })
    }

    return (
        <TouchableWithoutFeedback onPress={navigate}>
            <View style={styles.category}>
                <ImageBackground source={images.categories[category.image]} style={styles.image} />
                <Text style={styles.text}>{category.name}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Category