import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shop – BilligeSkjolde.dk",
  description: "Stort udvalg af billige og holdbare skjolde.",
}

const tellAFunnyStory = function (name: string) {

    //const myList = []


    return <h1>Sup </h1>

}

export default function AboutPage() { // Capitalized component name is best practice
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">
          Shop skjolde
        </h1>
        <p className="text-gray-600 max-w-2xl">
          Inspireret af historiske skjolde – designet til både kamp, træning og samling.
          {/* Use curly braces to execute the function */}
          {tellAFunnyStory("Kaj")}
        </p>
      </section>

      {/* Product grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Your product mapping would go here */}
          <div className="p-4 border rounded bg-white">Et flot skjold</div>
        </div>
      </section>
    </main>
  )
}