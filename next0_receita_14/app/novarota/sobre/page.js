import Link from "next/link";

export function Saudacao({ nome }) {
    return <p>Olá, {nome}! Esta marca foi escrita dentro de um page.js.</p>;
}

export default function SobreHome() {
    return (
        <div>
            <h1>Sobre</h1>
            <Saudacao nome="visitante" />
            <Link href="/">Voltar para a Home</Link> <br />
            <br />
            <Link href="/novarota">Voltar para Nova rota</Link>
        </div>
    );
}
