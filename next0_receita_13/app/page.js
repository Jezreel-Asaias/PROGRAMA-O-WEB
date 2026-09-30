// Estas são as funções secundárias que o exercício pediu (apenas export)
export function Cabecalho() {
    return (
        <header style={{ background: '#ddd', padding: '10px' }}>
            <h2>Meu App Web Premiado</h2>
        </header>
    )
}

export function Rodape() {
    return (
        <footer style={{ marginTop: '20px', fontSize: '12px' }}>
            <p>© 2026 - Desenvolvido no curso de Programação Web</p>
        </footer>
    )
}

// Esta continua sendo a função padrão da página principal
export default function Home(){
    return (
        <div>
            <Cabecalho /> {/* Usando o cabeçalho aqui também se quiser */}
            <div>Menu principal</div>
            <div>
                <h1>Viva Santana!</h1>
            </div>
            <Rodape />
        </div>
    )
}
