import Link from "next/link";

const steps = [
  {
    number: 1,
    title: "Responda às propostas",
    description:
      "Você responde se é a favor, contra ou neutro em propostas reais votadas no Congresso.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
        />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Comparamos seus votos",
    description:
      "Cada resposta é comparada com o voto de deputados e senadores.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
        />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Descubra seus representantes",
    description:
      "Ao final, mostramos quais parlamentares mais se alinham às suas opiniões.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
        />
      </svg>
    ),
  },
  {
    number: 4,
    title: "Veja também os desalinhados",
    description:
      "Você também poderá ver os políticos mais desalinhados com aquilo que você acredita.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
        />
      </svg>
    ),
  },
  {
    number: 5,
    title: "Dados reais e atualizados",
    description: "Tudo baseado em votações reais dos últimos 4 anos.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
        />
      </svg>
    ),
  },
];

export default function ComoFunciona() {
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
              className="text-sm font-medium text-emerald-600 dark:text-emerald-400"
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
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            Como funciona
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            Em poucos passos, descubra quem realmente te representa no Congresso
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-emerald-200 dark:bg-emerald-800 sm:block" />

          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.number} className="relative flex gap-6">
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg">
                  {step.icon}
                </div>

                <div className="flex-1 rounded-2xl bg-white p-6 shadow-md dark:bg-zinc-800">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
                      {step.number}
                    </span>
                    <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
                      {step.title}
                    </h2>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-emerald-700 hover:shadow-xl"
          >
            Começar agora
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
