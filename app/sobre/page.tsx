import Link from "next/link";

export default function Sobre() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-zinc-900 dark:to-zinc-800">
      <header className="flex items-center justify-between px-8 py-6">
        <Link
          href="/"
          className="text-lg font-bold text-zinc-900 dark:text-white"
        >
          Quem me representa?
        </Link>
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-6">
            <Link
              href="/como-funciona"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              Como funciona
            </Link>
            <Link
              href="/sobre"
              className="text-sm font-medium text-emerald-600 dark:text-emerald-400"
            >
              Sobre
            </Link>
          </nav>
          <Link
            href="/apoie"
            className="rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-emerald-700 hover:shadow-lg"
          >
            Apoie
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            Sobre
          </h1>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg dark:bg-zinc-800 sm:p-12">

          <div className="space-y-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            <p>
              <span className="font-semibold text-zinc-900 dark:text-white">
                “Quem me representa?”{" "}
              </span>
               é uma ferramenta que nasceu da ideia de que{" "}
              <span className="font-semibold text-zinc-900 dark:text-white">
                votar não deveria ser um ato baseado apenas em promessas ou
                popularidade
              </span>
              .
            </p>

            <p>
              Em um cenário de crescente desconfiança na política, acreditamos
              que{" "}
              <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                decisões mais conscientes podem transformar a democracia
              </span>
              .
            </p>

            <p>
              Antes de escolher em quem votar, é preciso entender quem realmente
              representa seus valores, ideias e prioridades.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4 border-t border-zinc-200 pt-10 dark:border-zinc-700">
            <div className="flex items-center gap-2 rounded-full bg-emerald-100 px-5 py-2.5 dark:bg-emerald-900/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5 text-emerald-700 dark:text-emerald-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="font-semibold text-emerald-800 dark:text-emerald-300">
                Menos discurso
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-emerald-100 px-5 py-2.5 dark:bg-emerald-900/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5 text-emerald-700 dark:text-emerald-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
              <span className="font-semibold text-emerald-800 dark:text-emerald-300">
                Mais consciência
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-emerald-100 px-5 py-2.5 dark:bg-emerald-900/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5 text-emerald-700 dark:text-emerald-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>
              <span className="font-semibold text-emerald-800 dark:text-emerald-300">
                Mais responsabilidade no voto
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-emerald-700 hover:shadow-xl"
          >
            Descobrir quem me representa
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
          </Link>
        </div>
      </main>
    </div>
  );
}
