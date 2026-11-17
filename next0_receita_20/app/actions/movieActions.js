"use server";

export async function searchMovies(formData) {
    const titleSearchKey = formData.get("titleSearchKey");
    const year = formData.get("year");

    if (!titleSearchKey || titleSearchKey.trim() === "") return { Search: [] };

    const params = new URLSearchParams({
        apikey: process.env.OMDB_API_KEY,
        s: titleSearchKey,
    });

    if (year && year.trim() !== "") params.set("y", year);

    try {
        const httpRes = await fetch(`https://www.omdbapi.com/?${params}`);
        return await httpRes.json();
    } catch (err) {
        return { error: `Erro na requisição: ${err}` };
    }
}
