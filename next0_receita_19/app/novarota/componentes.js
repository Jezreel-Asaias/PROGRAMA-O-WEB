export function MariaPrea() {
    return (
        <h2>Morreu Maria Preá...</h2>
    )
}

export function Mensagem({ texto, cor }) {
    return (
        <h2 style={{ color: cor }}>{texto}</h2>
    )
}