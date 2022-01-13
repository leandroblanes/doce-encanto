import { TextInput } from "react-native"

function NumberInput(props) {
    const { value, onChangeText, onBlur, onFocus, style } = props

    const handleChange = (text) => {
        onChangeText && onChangeText((text || '').replace(/[^0-9]/gi, ''))
    }

    return (
        <TextInput
            keyboardType="number-pad"
            style={style}
            onBlur={onBlur}
            onFocus={onFocus}
            value={value}
            onChangeText={handleChange}
        />
    )
}

export default NumberInput