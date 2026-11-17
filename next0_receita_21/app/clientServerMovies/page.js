"use client";

import Form from "next/form";
import Link from "next/link";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { searchMovies } from "../actions/movieActions";

export default function Home() {
    const [data, setData] = useState({});

    async function handleAction(formData) {
        const res = await searchMovies(formData);
        setData(res);
    }

    return (
        <div style={{ maxWidth: 600, margin: "2rem auto", fontFamily: "sans-serif" }}>
            <MovieForm actionHandler={handleAction} />
            {data.error && <p>{data.error}</p>}
            {data.Response === "False" && <p>{data.Error}</p>}
            {data.Search && <MovieTable movies={data.Search} />}
        </div>
    );
}

export function MovieForm({ actionHandler }) {
    const [titleSearchKey, setTitleSearchKey] = useState("");
    const [year, setYear] = useState("");

    return (
        <Form action={actionHandler} style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <label htmlFor="idTitleSearchKey">Título</label>
            <input
                id="idTitleSearchKey"
                name="titleSearchKey"
                value={titleSearchKey}
                onChange={e => setTitleSearchKey(e.target.value)}
                style={{ flex: 1, padding: 6 }}
            />

            <label htmlFor="idYear">Ano</label>
            <input
                id="idYear"
                name="year"
                value={year}
                onChange={e => setYear(e.target.value)}
                style={{ width: 70, padding: 6 }}
            />

            <SubmitButton />
        </Form>
    );
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button type="submit" disabled={pending} style={{ padding: "6px 12px" }}>
            {pending ? "Pesquisando..." : "Pesquisar"}
        </button>
    );
}

export function MovieTable({ movies }) {
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
                    <Link href={`/movie/${m.imdbID}`}>
                        {m.Title} --- {m.Year}
                    </Link>
                </div>
            ))}
        </div>
    );
}
