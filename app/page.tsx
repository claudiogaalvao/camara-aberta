import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-zinc-900 dark:to-zinc-800">
      <header className="flex items-center justify-end gap-6 px-8 py-6">
        <nav className="flex items-center gap-6">
          <Link
            href="/como-funciona"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            Como funciona
          </Link>
          <Link
            href="/sobre"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
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
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl md:text-7xl">
            Quem me representa?
          </h1>
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-xl">
            Toda eleição é a mesma coisa: promessas grandiosas, discursos fortes e pouca clareza sobre o que realmente foi feito. Em um cenário de crescente desconfiança na política, votar de forma consciente nunca foi tão importante. Descubra quais deputados e senadores mais estiveram alinhados com aquilo que você acredita nos últimos 4 anos.
          </p>

          <Link
            href="/quiz"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-emerald-700 hover:shadow-xl hover:scale-105"
          >
            Vamos lá
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
