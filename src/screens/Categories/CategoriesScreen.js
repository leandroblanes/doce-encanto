import { useEffect, useState } from 'react';
import { StyleSheet, Image, View } from 'react-native';

import BaseScreen from '../BaseScreen';
import CategoryList from './CategoryList';

import categoryService from '../../services/categoryService';
import sessionService from '../../services/sessionService';
import eventService, { LOAD } from '../../services/eventService';

import logo from '../../img/logo-200.png'

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        marginBottom: 30
    }
})

function CategoriesScreen({ navigation }) {
    const [categoryList, setCategoryList] = useState(null)
    const [users, setUsers] = useState(sessionService.users)

    useEffect(() => {
        //navigation.navigate('Order', { orderId: 1 })

        categoryService.list().then(categoryList => {
            setCategoryList(categoryList)
        })

        const loadId = eventService.subscribe(LOAD, () => {
            setUsers([...sessionService.users])
        })

        return () => eventService.unsubuscribe(loadId)
    }, [])

    return (
        <BaseScreen>
            <View style={styles.logoContainer}>
                <Image source={logo} style={{ width: 150, height: 112.5 }} />
            </View>
            <CategoryList categoryList={categoryList} navigation={navigation} />
            {/* <Text>
                {JSON.stringify(users)}
            </Text> */}
        </BaseScreen>
    )
}

export default CategoriesScreen