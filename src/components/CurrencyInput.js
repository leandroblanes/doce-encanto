import { TextInput } from "react-native"
import { formatarMoeda } from "../util/Util"

function CurrencyInput(props) {
    const { value, onChangeText, onBlur, onFocus, style } = props

    const handleChange = (text) => {
        let newValue = 0
        if (text.length != '') {
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
            value={value == 0 ? '' : formatarMoeda(value || 0)}
            onChangeText={handleChange}
        />
    )
}

export default CurrencyInput