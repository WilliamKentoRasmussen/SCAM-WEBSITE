import Image from "next/image"

export type Product = {
  id: number
  name: string
  price: number
  image: string
}

export default function ProductCard({
  product,
}: {
  product: Product
}) {
  return (
    <div className="border rounded-xl overflow-hidden hover:shadow-lg transition bg-white">
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={400}
        className="object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">
          {product.name}
        </h3>

        <p className="text-gray-700 mb-4">
          {product.price} kr.
        </p>

        <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
          Læg i kurv
        </button>
      </div>
    </div>
  )
}
