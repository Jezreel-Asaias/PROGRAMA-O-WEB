import Link from "next/link";
import { Cabecalho, Rodape } from "./componentes";

export default function Home() {
    return (
        <div>
            <Cabecalho />
            <div>Menu principal</div>
            <div>
                <h1>Viva Santana!</h1>
                <Link href="/novarota">Nova rota</Link> <br />
                <br />
                <Link href="/novarota/sobre">Sobre</Link>
            </div>
            <Rodape />
        </div>
    );
}
