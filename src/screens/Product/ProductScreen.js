import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Button, Headline, Paragraph } from 'react-native-paper';
import Currency from '../../components/Currency';
import colors from '../../util/colors';

import BaseScreen from '../BaseScreen';
import QuantitySelector from '../../components/QuantitySelector';
import FloatingCart from '../../components/FloatingCart';

import cartService from '../../services/cartService';
import images from '../../util/images';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        minHeight: '100%'
    },
    scrollView: {
        flex: 1
    },
    price: {
        color: colors.marrom,
        marginTop: 5,
        marginBottom: 10,
        fontSize: 18
    },
    buttonContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.marromClaro,
        height: 100
    },
    imageContainer: {
        alignItems: 'center'
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20

    }
})

function ProductScreen({ route, navigation }) {
    const { product } = route.params
    const [quantity, setQuantity] = useState(1)

    const addToCart = () => {
        cartService.add(product, quantity)
        navigation.navigate('Cart')
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <BaseScreen>
                    <View>
                        {product.image && (
                            <View style={styles.imageContainer}>
                                <ImageBackground
                                    source={images.products[product.image]}
                                    style={styles.image}
                                />
                            </View>
                        )}
                        <View>
                            <Headline>{product.name}</Headline>
                            <Currency style={styles.price} value={product.price} />
                        </View>
                    </View>
                    <Paragraph>{product.description}</Paragraph>
                </BaseScreen>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <QuantitySelector quantity={quantity} onChange={setQuantity} />
                <Button mode="contained" onPress={addToCart}>
                    Adicionar <Currency value={product.price * quantity} />
                </Button>
            </View>
        </View>
    )
}

export default ProductScreen