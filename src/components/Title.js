import { View, StyleSheet } from "react-native"
import { Headline } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        marginBottom: 30
    }
});


function Title({ text }) {
    return (
        <View style={styles.container}>
            <Headline>{text}</Headline>
        </View>
    )
}

export default Title