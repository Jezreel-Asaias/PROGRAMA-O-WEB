import { Mensagem } from "../componentes";

export default function OutraPagina() {
    return (
        <div>
            <h1>Outra página, dentro de novarota</h1>
            <Mensagem texto="Componente reaproveitado em outra rota" cor="seagreen" />
        </div>
    )
}