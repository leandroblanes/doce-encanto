import { useEffect, useState } from 'react';
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
            <Title text={category.name} />
            <ProductList productList={productList} navigation={navigation} />
        </BaseScreen>
    )
}

export default CategoryScreen