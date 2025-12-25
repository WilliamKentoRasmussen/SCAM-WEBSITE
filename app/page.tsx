import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BilligeSkjolde.dk – Kvalitetsskjolde til lave priser",
  description:
    "Køb billige og holdbare skjolde online. Hurtig levering, høj kvalitet og skarpe priser hos BilligeSkjolde.dk.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Billige skjolde <br /> uden at gå på kompromis
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Hos <strong>BilligeSkjolde.dk</strong> finder du slidstærke og
            prisvenlige skjolde til både træning, kamp og samling.
          </p>

          <div className="flex gap-4">
            <Link
              href="/shop"
              className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Se udvalg
            </Link>

            <Link
              href="/about"
              className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Læs mere
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/file.svg"
            alt="Billige skjolde"
            width={500}
            height={500}
            priority
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">💰 Lave priser</h3>
            <p className="text-gray-600">
              Vi fokuserer på kvalitet til den rigtige pris.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">🚚 Hurtig levering</h3>
            <p className="text-gray-600">
              Afsendelse inden for 1–2 hverdage.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">🛡️ Holdbar kvalitet</h3>
            <p className="text-gray-600">
              Skjolde der kan holde til brug – igen og igen.
            </p>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Klar til at finde dit næste skjold?
        </h2>
        <p className="text-gray-600 mb-6">
          Se vores udvalg og find det skjold der passer dig bedst.
        </p>
        <Link
          href="/shop"
          className="inline-block bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          Gå til shoppen
        </Link>
      </section>
    </main>
  )
}
