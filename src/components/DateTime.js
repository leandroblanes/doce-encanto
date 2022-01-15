import { useMemo } from "react"
import { Text } from "react-native"
import { formatDate, formatTime } from '../util/util'

function DateTime({ value, style, showMinutes }) {
    if (value == null || value == undefined)
        return null

    const date = useMemo(() => new Date(value))

    return (
        <Text style={style}>
            {formatDate(date)}{showMinutes ? ' às ' + formatTime(date) : null}
        </Text>
    )
}

export default DateTime