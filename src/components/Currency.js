import { Text } from "react-native"
import { formatCurrency } from '../util/util'

function Currency({ value, style }) {
    if (value == null || value == undefined)
        value = 0

    return (
        <Text style={style}>
            R$ {formatCurrency(value)}
        </Text>
    )
}

export default Currency