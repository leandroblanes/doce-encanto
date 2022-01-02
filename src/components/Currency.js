import { Text } from "react-native"

function Currency({ value, style }) {
    if (value == null || value == undefined)
        value = 0

    return (
        <Text style={style}>
            R$ {value.toLocaleString('pt-BR', {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2
            })}
        </Text>
    )
}

export default Currency