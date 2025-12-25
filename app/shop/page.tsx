import ProductCard, { Product } from "./ProductCard"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shop – BilligeSkjolde.dk",
  description: "Stort udvalg af billige og holdbare skjolde.",
}

const products: Product[] = [
  { id: 1, name: "Rundt træskjold", price: 499, image: "/file.svg" },
  { id: 2, name: "Vikingskjold", price: 649, image: "/file.svg" },
  { id: 3, name: "Romersk skjold", price: 799, image: "/file.svg" },
  { id: 4, name: "Kampskjold – stål", price: 999, image: "/file.svg" },
  { id: 5, name: "Dekorativt skjold", price: 399, image: "/file.svg" },
  { id: 6, name: "Turneringsskjold", price: 1199, image: "/file.svg" },
]

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">
          Shop skjolde
        </h1>
        <p className="text-gray-600 max-w-2xl">
          Inspireret af historiske skjolde – designet til både kamp, træning og samling.
        </p>
      </section>

      {/* Product grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  )
}
