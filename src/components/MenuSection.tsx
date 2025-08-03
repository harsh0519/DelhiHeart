'use client'

import { useState } from 'react'

interface MenuItem {
  name: string
  description: string
  price: number
  rating: number
  category: string
  image: string
}

interface MenuSectionProps {
  menuItems: MenuItem[]
  categories: string[] 
}

const MenuSection = ({ menuItems, categories }: MenuSectionProps) => {
  const [activeCategory, setActiveCategory] = useState('All')

  // Ensure categories is always an array
  const validCategories = Array.isArray(categories) ? categories : []
  const allCategories = ['All', ...validCategories.filter(c => c !== 'All')]

  const filteredItems =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter(item => item.category === activeCategory)

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Explore Our Menu</h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {allCategories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-all duration-200 ${
              activeCategory === category
                ? 'bg-black text-white'
                : 'text-gray-600 border-gray-300 hover:bg-gray-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg hover:scale-[1.02] transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                <div className="flex justify-between items-center text-sm mt-2">
                  <span className="font-bold text-gray-800">${item.price.toFixed(2)}</span>
                  <span className="text-yellow-500 font-medium">⭐ {item.rating}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No items found in this category.
          </p>
        )}
      </div>
    </section>
  )
}

export default MenuSection
