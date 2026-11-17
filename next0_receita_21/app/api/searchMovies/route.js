export async function GET(request) {
    const titleSearchKey = request.nextUrl.searchParams.get("titleSearchKey");

    if (!titleSearchKey) {
        return Response.json({ Response: "False", Error: "Informe o parâmetro titleSearchKey." }, { status: 400 });
    }

    const httpRes = await fetch(
        `https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${encodeURIComponent(titleSearchKey)}`,
    );
    const jsonRes = await httpRes.json();

    return Response.json({ ...jsonRes });
}
