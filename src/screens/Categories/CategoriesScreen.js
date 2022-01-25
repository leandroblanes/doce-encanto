import { useEffect, useState } from 'react';
import { StyleSheet, Image, View } from 'react-native';

import BaseScreen from '../BaseScreen';
import CategoryList from './CategoryList';

import categoryService from '../../services/categoryService';

import logo from '../../img/logo-200.png'

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        marginBottom: 30
    }
})

function CategoriesScreen({ navigation }) {
    const [categoryList, setCategoryList] = useState(null)

    useEffect(() => {
        //navigation.navigate('Order', { orderId: 1 })

        categoryService
            .list()
            .then(setCategoryList)
            .catch(console.log)
    }, [])

    return (
        <BaseScreen>
            <View style={styles.logoContainer}>
                <Image source={logo} style={{ width: 150, height: 112.5 }} />
            </View>
            <CategoryList categoryList={categoryList} navigation={navigation} />
        </BaseScreen>
    )
}

export default CategoriesScreen