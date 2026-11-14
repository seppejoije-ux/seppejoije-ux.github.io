import Link from "next/link";

export default function LidWorden() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-2xl mx-auto px-4 sm:px-10 py-12 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold mb-10">Lid worden</h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10">
          <a
            href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=9Ywju8lmBkaYUqnz4XgtY3kHkWqHIqZKg4nENVD-uFNUN0ZWVUVUV1NYUUc4SFY1TDg0QVdQNUFZNi4u"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto rounded-full bg-blue-700 px-8 py-4 text-lg sm:text-xl font-extrabold uppercase tracking-wider text-yellow-300 shadow-lg ring-4 ring-yellow-300 transition-all duration-200 hover:scale-105 hover:bg-blue-800 hover:shadow-2xl active:scale-95"
          >
            Inschrijvingsformulier
          </a>

          <a
            href="/lid-worden/Reglement.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto rounded-full bg-yellow-300 px-8 py-4 text-lg sm:text-xl font-extrabold uppercase tracking-wider text-blue-700 shadow-lg ring-4 ring-blue-700 transition-all duration-200 hover:scale-105 hover:bg-yellow-200 hover:shadow-2xl active:scale-95"
          >
            Reglement
          </a>
        </div>

        <Link
          href="/"
          className="inline-block rounded-md bg-blue-700 px-6 py-3 font-bold uppercase text-yellow-300 hover:bg-blue-800 transition-colors"
        >
          ← Terug naar home
        </Link>
      </div>
    </main>
  );
}
