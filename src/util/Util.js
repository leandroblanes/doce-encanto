export function formatarMoeda(valor) {
    return (valor || 0)
        .toLocaleString('pt-BR', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
        })
}