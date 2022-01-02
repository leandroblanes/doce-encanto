import { Text } from "react-native"

function Currency({ value, textAlign = "left" }) {
    if (value == null || value == undefined)
        value = 0

    return (
        <Text style={{
            textAlign
        }}>
            R$ {value.toLocaleString('pt-BR', {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2
            })}
        </Text>
    )
}

export default Currency