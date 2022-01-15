import { TextInput } from "react-native"
import { formatCurrency } from "../util/util"

function CurrencyInput(props) {
    const { value, onChangeText, onBlur, onFocus, style } = props

    const handleChange = (text) => {
        let newValue = 0
        if (text.length > 0) {
            newValue = parseFloat(text.replace(/[^0-9]/gi, '')) / 100
        }

        onChangeText && onChangeText(newValue)
    }

    return (
        <TextInput
            keyboardType="number-pad"
            style={style}
            onBlur={onBlur}
            onFocus={onFocus}
            value={value == 0 ? '' : formatCurrency(value || 0)}
            onChangeText={handleChange}
        />
    )
}

export default CurrencyInput