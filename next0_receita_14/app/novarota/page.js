import Link from "next/link";
import { MariaPrea } from "./componentes";
import { Saudacao } from "./sobre/page";

export default function NovaRotaHome() {
    return (
        <div>
            <h1>Nova Rota, Nova Página</h1>
            <MariaPrea mensagem="Morreu Maria Preá..." />
            <MariaPrea mensagem="Mas ela deixou saudade." />
            <Saudacao nome="Santana" />
            <Link href="/">Voltar para a Home</Link> <br />
            <br />
            <Link href="/novarota/sobre">Ir para Sobre</Link>
        </div>
    );
}
