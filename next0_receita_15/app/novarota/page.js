import Link from 'next/link'
import { MariaPrea } from "./componentes";

export default function NovaRotaHome(){
    return (
       <div>
          <h1>Nova Rota, Nova Página</h1>
          <MariaPrea/>
          <Link href="/">Voltar</Link>
       </div>
    )
}