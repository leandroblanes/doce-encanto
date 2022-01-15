import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import FloatingCart from '../../components/FloatingCart';
import Title from '../../components/Title';

import productService from '../../services/productService';

import BaseScreen from '../BaseScreen';
import ProductList from './ProductList';

function CategoryScreen({ route, navigation }) {
    const { category } = route.params
    const [productList, setProductList] = useState(null)

    useEffect(() => {
        productService.list(category.id).then(setProductList)
    }, [])

    return (
        <BaseScreen>
            <ScrollView>
                <Title text={category.name} />
                <ProductList productList={productList} navigation={navigation} />
            </ScrollView>
        </BaseScreen>
    )
}

export default CategoryScreen