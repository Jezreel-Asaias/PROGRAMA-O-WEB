import Link from "next/link";

export default function Home() {
    return (
        <div>
            <div>
                <h1>Viva Santana!</h1>
                <Link href="/novarota">Rota1</Link> <br />
                <br />
                <Link href="/movies">Filmes</Link> <br />
                <br />
                <Link href="/clientMovies1">Filmes (client)</Link> <br />
                <br />
                <Link href="/movieSearch">Pesquisar filmes</Link> <br />
                <br />
                <Link href="/clientMovies2">Filmes (API própria)</Link> <br />
                <br />
                <Link href="/clientServerMovies">Filmes (Server Action)</Link> <br />
                <br />
                <Link href="/movie/tt0095801">Filme (rota dinâmica)</Link> <br />
                <br />
                <a href="/novarota">Rota 1, jeito antigo</a>
            </div>
        </div>
    );
}
