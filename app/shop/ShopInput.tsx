"use client"

import { useState } from "react"

export default function ShopInput() {
  const [value, setValue] = useState<string>("")

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target.value.toUpperCase() // example manipulation

    setValue(input)
  }

  return (
    <div className="max-w-md">
      <label className="block mb-2 font-medium">
        Søg efter skjold
      </label>
      

      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Indtast navn..."
        className="w-full border border-gray-300 rounded-lg px-4 py-2"
      />

      <p className="mt-2 text-sm text-gray-600">
        Manipuleret værdi: <strong>{value}</strong>
      </p>

      <div className="min-h-md = 5"> 
        <h1>   Good job mann</h1>

      </div>
    </div>
    
  )
}
