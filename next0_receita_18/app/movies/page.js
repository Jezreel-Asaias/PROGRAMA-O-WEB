export default async function Home({ searchParams }) {
    const { titleSearchKey, year, imdbID = "tt3896198" } = await searchParams;

    const params = new URLSearchParams({ apikey: process.env.OMDB_API_KEY });

    if (titleSearchKey) {
        params.set("t", titleSearchKey);
        if (year) params.set("y", year);
    } else {
        params.set("i", imdbID);
    }

    const res = await fetch(`https://www.omdbapi.com/?${params}`);
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
