"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Pergunta {
  id: number;
  titulo: string;
  pergunta: string;
  identificador: string;
  descricao_breve: string;
  argumentos_a_favor: string;
  argumentos_contra: string;
}

type Resposta = "favor" | "contra" | "abster" | null;

export default function Quiz() {
  const [perguntas, setPerguntas] = useState<Pergunta[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resposta, setResposta] = useState<Resposta>(null);
  const [respostas, setRespostas] = useState<Record<number, Resposta>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPerguntas() {
      try {
        const res = await fetch("/api/perguntas");
        if (!res.ok) throw new Error("Erro ao carregar perguntas");
        const data = await res.json();
        setPerguntas(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    }
    fetchPerguntas();
  }, []);

  const perguntaAtual = perguntas[currentIndex];
  const isLastQuestion = currentIndex === perguntas.length - 1;

  function handleResposta(valor: Resposta) {
    setResposta(valor);
    if (perguntaAtual) {
      setRespostas((prev) => ({ ...prev, [perguntaAtual.id]: valor }));
    }
  }

  function handleNext() {
    if (isLastQuestion) {
      console.log("Respostas finais:", respostas);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setResposta(null);
    }
  }

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-zinc-900 dark:to-zinc-800">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-emerald-200 border-t-emerald-600" />
          <p className="text-zinc-600 dark:text-zinc-300">
            Carregando perguntas...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-zinc-900 dark:to-zinc-800">
        <div className="text-center">
          <p className="mb-4 text-red-600">{error}</p>
          <Link
            href="/"
            className="text-emerald-600 underline hover:text-emerald-700"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  if (perguntas.length === 0) {
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-zinc-900 dark:to-zinc-800">
        <div className="text-center">
          <p className="mb-4 text-zinc-600 dark:text-zinc-300">
            Nenhuma pergunta disponível no momento.
          </p>
          <Link
            href="/"
            className="text-emerald-600 underline hover:text-emerald-700"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-zinc-900 dark:to-zinc-800">
      <header className="flex items-center justify-between px-8 py-6">
        <Link
          href="/"
          className="text-lg font-bold text-zinc-900 dark:text-white"
        >
          Quem me representa
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {currentIndex + 1} de {perguntas.length}
          </span>
        </div>
      </header>

      <div className="mx-auto w-full max-w-4xl px-6 py-4">
        <div className="mb-6 h-2 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
          <div
            className="h-full bg-emerald-600 transition-all duration-300"
            style={{
              width: `${((currentIndex + 1) / perguntas.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-6 pb-8">
        <div className="flex-1">
          <div className="mb-2">
            <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
              {perguntaAtual.identificador}
            </span>
          </div>

          <h1 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
            {perguntaAtual.titulo}
          </h1>

          <p className="mb-6 text-lg text-zinc-600 dark:text-zinc-300">
            {perguntaAtual.descricao_breve}
          </p>

          <div className="mb-8 rounded-2xl bg-white p-6 shadow-lg dark:bg-zinc-800">
            <p className="text-xl font-medium text-zinc-900 dark:text-white">
              {perguntaAtual.pergunta}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={() => handleResposta("favor")}
              className={`flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold transition-all ${
                resposta === "favor"
                  ? "bg-emerald-600 text-white shadow-lg"
                  : "bg-white text-emerald-700 shadow-md hover:bg-emerald-50 dark:bg-zinc-800 dark:text-emerald-400 dark:hover:bg-zinc-700"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                />
              </svg>
              A favor
            </button>

            <button
              onClick={() => handleResposta("abster")}
              className={`flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold transition-all ${
                resposta === "abster"
                  ? "bg-zinc-600 text-white shadow-lg"
                  : "bg-white text-zinc-600 shadow-md hover:bg-zinc-50 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14"
                />
              </svg>
              Me abster
            </button>

            <button
              onClick={() => handleResposta("contra")}
              className={`flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold transition-all ${
                resposta === "contra"
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-white text-red-700 shadow-md hover:bg-red-50 dark:bg-zinc-800 dark:text-red-400 dark:hover:bg-zinc-700"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                />
              </svg>
              Contra
            </button>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={handleNext}
            disabled={!resposta}
            className={`flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold transition-all ${
              resposta
                ? "bg-emerald-600 text-white shadow-lg hover:bg-emerald-700 hover:shadow-xl"
                : "cursor-not-allowed bg-zinc-300 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-500"
            }`}
          >
            {isLastQuestion ? "Ver resultado" : "Próxima"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}
