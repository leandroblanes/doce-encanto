import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import BaseScreen from '../BaseScreen';
import CategoryList from './CategoryList';

import categoryService from '../../services/categoryService';

function HomeScreen({ navigation }) {
    const [categoryList, setCategoryList] = useState(null)

    useEffect(() => {
        categoryService.list().then(setCategoryList)
    }, [])

    return (
        <BaseScreen>
            <CategoryList categoryList={categoryList} navigation={navigation} />
        </BaseScreen>
    )
}

export default HomeScreen