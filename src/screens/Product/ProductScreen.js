import { useEffect, useState } from 'react';
import { Text, View, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { Button, Headline, Paragraph } from 'react-native-paper';
import Currency from '../../components/Currency';
import cores from '../../util/cores';

import BaseScreen from '../BaseScreen';
import QuantitySelector from './QuantitySelector';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        minHeight: '100%'
    },
    scrollView: {
        flex: 1
    },
    price: {
        color: cores.marrom,
        marginTop: 5,
        marginBottom: 10,
        fontSize: 18
    },
    buttonContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: cores.marromClaro,
        height: 100
    }
})

function ProductScreen({ route, navigation }) {
    const { product } = route.params
    const [quantity, setQuantity] = useState(1)

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <BaseScreen>
                    <View>
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
                <Button mode="contained" onPress={() => alert('oi')}>
                    Adicionar <Currency value={product.price * quantity} />
                </Button>
            </View>
        </View>
    )
}

export default ProductScreen