import { Cabecalho, Rodape } from "../page"

export default function Rota1(){
    return (
        <div>
            {/* Chamando as funções que importamos */}
            <Cabecalho /> 
            
            <div style={{ padding: '20px' }}>
                <h1>Esta é a Rota 1!</h1>
                <p>Eu consegui importar componentes de outro arquivo com sucesso!</p>
            </div>

            <Rodape />
        </div>
    )
}