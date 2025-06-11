"use client"

import { useState } from "react"
import { Search } from "lucide-react"

const storeLocations = [
  { id: 1, name: "Downtown Flagship Store", address: "123 Main St, New York, NY", distance: "0.5 miles" },
  { id: 2, name: "Westside Market", address: "456 Ocean Ave, Los Angeles, CA", distance: "1.2 miles" },
  { id: 3, name: "Northside Beverages", address: "789 Lake St, Chicago, IL", distance: "2.0 miles" },
  { id: 4, name: "Eastside Drinks", address: "101 Park Ave, Boston, MA", distance: "3.5 miles" },
]

export default function StoreLocator() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredStores, setFilteredStores] = useState(storeLocations)

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    if (term === "") {
      setFilteredStores(storeLocations)
    } else {
      const filtered = storeLocations.filter(
        (store) =>
          store.name.toLowerCase().includes(term.toLowerCase()) ||
          store.address.toLowerCase().includes(term.toLowerCase()),
      )
      setFilteredStores(filtered)
    }
  }

  return (
    <section id="stores" className="py-24 bg-gradient-to-b from-charcoal to-black relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-red/10 rounded-full filter blur-[120px] animate-glow-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-neon-red/10 rounded-full filter blur-[150px] animate-glow-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 heading-highlight">
            Find <span className="text-neon-red glow-text-red">BackWin</span> Near You
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Locate our premium beverages at stores in your area or shop online for convenient delivery.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-black/30 p-6 rounded-lg border border-gray-800/50 backdrop-blur-sm mb-8 border-glow">
            <div className="mb-6">
              <label htmlFor="location-search" className="block text-white text-lg font-medium mb-2">
                Find stores near you
              </label>
              <div className="relative">
                <input
                  id="location-search"
                  type="text"
                  placeholder="Enter city or zip code"
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full bg-black/50 border border-gray-700 rounded-lg h-12 pl-10 pr-4 text-white placeholder:text-gray-400 focus:border-neon-red focus:outline-none focus:ring-2 focus:ring-neon-red/50"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2 scrollbar-hide">
              {filteredStores.length > 0
