import { MariaPrea, Mensagem } from "./componentes";

function Rodape() {
    return (
        <p>Rodapé definido no próprio page.js</p>
    )
}

export default function NovaRotaHome() {
    return (
        <div>
            <h1>Nova Rota, Nova Página</h1>
            <MariaPrea />
            <Mensagem texto="Morreu Maria Preá..." cor="crimson" />
            <Mensagem texto="Mensagem passada como parâmetro" cor="steelblue" />
            <Rodape />
        </div>
    )
}