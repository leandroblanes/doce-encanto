import { TextInput } from "react-native"

function PhoneInput(props) {
    const { value, onChangeText, onBlur, onFocus, style } = props

    const handleChange = (text) => {
        const onlyNumbers = (text || '').replace(/[^0-9]/gi, '').substr(0, 11)
        onChangeText && onChangeText(onlyNumbers.split('').map((c, i, arr) => {
            if (i == 0) return `(${c}`
            if (i == 2) return `) ${c}`
            if (arr.length == 11 && i == 7) return `-${c}`
            if (arr.length != 11 && i == 6) return `-${c}`
            return c
        }).join(''))
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

export default PhoneInput