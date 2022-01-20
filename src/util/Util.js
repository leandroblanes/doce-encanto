export const months = [
    { number: 1, name: "Janeiro", abbreviation: "Jan" },
    { number: 2, name: "Fevereiro", abbreviation: "Fev" },
    { number: 3, name: "Março", abbreviation: "Mar" },
    { number: 4, name: "Abril", abbreviation: "Abr" },
    { number: 5, name: "Maio", abbreviation: "Mai" },
    { number: 6, name: "Junho", abbreviation: "Jun" },
    { number: 7, name: "Julho", abbreviation: "Jul" },
    { number: 8, name: "Agosto", abbreviation: "Ago" },
    { number: 9, name: "Setembro", abbreviation: "Set" },
    { number: 10, name: "Outubro", abbreviation: "Out" },
    { number: 11, name: "Novembro", abbreviation: "Nov" },
    { number: 12, name: "Dezembro", abbreviation: "Dez" }
]

export const freight = 5

export function formatCurrency(value) {
    return (value || 0)
        .toFixed(2)
        .replace(/[^0-9]/gi, '')
        .split('')
        .reverse()
        .map((c, i) => {
            if (i == 2) return `${c},`
            if (i == 5) return `${c}.`
            if (i == 8) return `${c}.`
            if (i == 11) return `${c}.`
            return c
        })
        .reverse()
        .join('')
}

export function formatDate(value) {
    const day = value.getDate()
    const month = months.find(el => el.number == (value.getMonth() + 1))
    const year = value.getFullYear()
    return `${day.toString().padStart(2, '0')} ${month.abbreviation} ${year}`
}

export function formatTime(value) {
    const hours = value.getHours()
    const minutes = value.getMinutes()
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
}