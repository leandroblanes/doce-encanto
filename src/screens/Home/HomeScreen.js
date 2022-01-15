import { useEffect, useState } from 'react';
import { StyleSheet, Text, ScrollView, Image, View } from 'react-native';

import BaseScreen from '../BaseScreen';
import CategoryList from './CategoryList';

import categoryService from '../../services/categoryService';
import sessionService from '../../services/sessionService';
import eventService, { LOAD } from '../../services/eventService';

import logo from '../../../assets/logo-200.png'

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        marginBottom: 30
    }
})

function HomeScreen({ navigation }) {
    const [categoryList, setCategoryList] = useState(null)
    const [users, setUsers] = useState(sessionService.users)

    useEffect(() => {
        // navigation.navigate('Resumo', { orderId: 1 })
        // return

        categoryService.list().then(setCategoryList)

        const loadId = eventService.subscribe(LOAD, () => {
            setUsers([...sessionService.users])
        })

        return () => eventService.unsubuscribe(loadId)
    }, [])

    return (
        <BaseScreen>
            <ScrollView>
                <View style={styles.logoContainer}>
                    <Image source={logo} />
                </View>
                <CategoryList categoryList={categoryList} navigation={navigation} />
                {/* <Text>
                {JSON.stringify(users)}
            </Text> */}
            </ScrollView>
        </BaseScreen>
    )
}

export default HomeScreen