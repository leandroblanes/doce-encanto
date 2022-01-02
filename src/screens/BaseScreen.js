import { View, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

function BaseScreen({ children }) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

export default BaseScreen