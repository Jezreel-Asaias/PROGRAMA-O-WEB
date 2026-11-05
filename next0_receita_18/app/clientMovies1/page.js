"use client";

import Form from "next/form";
import { memo, useCallback, useState } from "react";
import { useFormStatus } from "react-dom";

export default function Home() {
    console.log("renderizou Home");
    const [resultMovies, setResultMovies] = useState([]);

    const handleAction = useCallback(async formData => {
        const titleSearchKey = formData.get("titleSearchKey");
        const httpRes = await fetch(
            `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&s=${encodeURIComponent(titleSearchKey)}`,
        );
        const jsonRes = await httpRes.json();
        setResultMovies(jsonRes.Search || []);
    }, []);

    return (
        <div style={{ maxWidth: 600, margin: "2rem auto", fontFamily: "sans-serif" }}>
            <MovieForm handleAction={handleAction} />
            <MovieTable movies={resultMovies} />
        </div>
    );
}

export const MovieForm = memo(function MovieForm({ handleAction }) {
    console.log("renderizou MovieForm");
    const [titleSearchKey, setTitleSearchKey] = useState("");

    return (
        <Form action={handleAction} style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <label htmlFor="idTitleSearchKey">Título</label>
            <input
                id="idTitleSearchKey"
                name="titleSearchKey"
                value={titleSearchKey}
                onChange={e => setTitleSearchKey(e.target.value)}
                style={{ flex: 1, padding: 6 }}
            />
            <SubmitButton />
        </Form>
    );
});

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button type="submit" disabled={pending} style={{ padding: "6px 12px" }}>
            {pending ? "Pesquisando..." : "Pesquisar"}
        </button>
    );
}

export function MovieTable({ movies }) {
    console.log("renderizou MovieTable");

    return (
        <div style={{ marginTop: 16 }}>
            {movies.map(m => (
                <div
                    key={m.imdbID}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "8px 0",
                        borderBottom: "1px solid #ccc",
                    }}
                >
                    {m.Poster !== "N/A" ? (
                        <img src={m.Poster} alt={`Pôster de ${m.Title}`} width={60} />
                    ) : (
                        <div style={{ width: 60 }} />
                    )}
                    <span>
                        {m.Title} --- {m.Year}
                    </span>
                </div>
            ))}
        </div>
    );
}
