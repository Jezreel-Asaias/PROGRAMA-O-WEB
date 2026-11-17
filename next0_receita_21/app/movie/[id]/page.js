import Image from "next/image";
import { notFound } from "next/navigation";

export const revalidate = 86400;

export async function generateStaticParams() {
    const allMovies = await fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=lady`).then(res =>
        res.json(),
    );

    return (allMovies.Search || []).map(movie => ({
        id: movie.imdbID,
    }));
}

export default async function Home({ params }) {
    const { id } = await params;

    const movie = await fetch(
        `https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${encodeURIComponent(id)}`,
    ).then(res => res.json());

    if (movie.Response === "False") notFound();

    return (
        <div style={{ maxWidth: 700, margin: "2rem auto", fontFamily: "sans-serif" }}>
            <h1>
                {movie.Title} ({movie.Year})
            </h1>

            {movie.Poster !== "N/A" && (
                <Image src={movie.Poster} alt={`Pôster de ${movie.Title}`} width={300} height={444} />
            )}

            <p>
                <strong>Direção:</strong> {movie.Director}
            </p>
            <p>
                <strong>Elenco:</strong> {movie.Actors}
            </p>
            <p>
                <strong>Gênero:</strong> {movie.Genre}
            </p>
            <p>
                <strong>Sinopse:</strong> {movie.Plot}
            </p>
        </div>
    );
}
