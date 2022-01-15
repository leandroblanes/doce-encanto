import { useMemo } from "react"
import { Text } from "react-native"

function DateTime({ value, style, showMinutes }) {
    if (value == null || value == undefined)
        return null

    const date = useMemo(() => new Date(value))

    return (
        <Text style={style}>
            {date.toLocaleDateString('pt-BR')}{showMinutes ? ' ' + date.toLocaleTimeString('pt-BR') : null}
        </Text>
    )
}

export default DateTime