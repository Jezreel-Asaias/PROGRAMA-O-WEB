export default async function Home({ searchParams }) {
    const { imdbID = "tt3896198" } = await searchParams;

    const res = await fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${imdbID}`);
    const data = await res.json();

    if (data.Response === "False") {
        return (
            <div>
                <p>Não foi possível carregar o filme: {data.Error}</p>
            </div>
        );
    }

    return (
        <div>
            <h1>
                {data.Title} --- {data.Year}
            </h1>

            {data.Poster !== "N/A" && <img src={data.Poster} alt={`Pôster de ${data.Title}`} width={200} />}

            <p>
                <strong>Direção:</strong> {data.Director}
            </p>
            <p>
                <strong>Elenco:</strong> {data.Actors}
            </p>
            <p>
                <strong>Gênero:</strong> {data.Genre}
            </p>
            <p>
                <strong>Duração:</strong> {data.Runtime}
            </p>
            <p>
                <strong>Sinopse:</strong> {data.Plot}
            </p>

            <h2>Avaliações</h2>
            <div>
                {data.Ratings.map(r => (
                    <div key={r.Source}>
                        {r.Source} --- {r.Value}
                    </div>
                ))}
            </div>
        </div>
    );
}
