"use client";

import { Search, MapPin, Star, Clock, Filter } from "lucide-react";

export default function ExplorarPage() {
    return (
        <div className="flex flex-col gap-6 h-full">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Explorar</h1>
                    <p className="text-gray-600">Descubre nuevos lugares y experiencias</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    <Filter className="h-4 w-4" />
                    Filtros
                </button>
            </div>

            {/* Barra de búsqueda */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Buscar destinos, actividades, restaurantes..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
            </div>

            {/* Categorías */}
            <div className="flex gap-3 overflow-x-auto pb-2">
                {["Todo", "Restaurantes", "Hoteles", "Actividades", "Cultura", "Naturaleza"].map((categoria) => (
                    <button
                        key={categoria}
                        className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                            categoria === "Todo" 
                                ? "bg-indigo-100 text-indigo-800" 
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        {categoria}
                    </button>
                ))}
            </div>

            {/* Grid de lugares */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
                {[
                    {
                        nombre: "Montevideo",
                        descripcion: "Capital vibrante con rica historia",
                        rating: 4.8,
                        imagen: "🏛️",
                        tipo: "Ciudad"
                    },
                    {
                        nombre: "Punta del Este",
                        descripcion: "Playas exclusivas y vida nocturna",
                        rating: 4.6,
                        imagen: "🏖️",
                        tipo: "Playa"
                    },
                    {
                        nombre: "Colonia del Sacramento",
                        descripcion: "Ciudad histórica patrimonio UNESCO",
                        rating: 4.9,
                        imagen: "🏰",
                        tipo: "Histórico"
                    },
                    {
                        nombre: "Cabo Polonio",
                        descripcion: "Reserva natural sin electricidad",
                        rating: 4.7,
                        imagen: "🌊",
                        tipo: "Naturaleza"
                    },
                    {
                        nombre: "Valle del Lunarejo",
                        descripcion: "Paisajes únicos y quebradas",
                        rating: 4.5,
                        imagen: "🏔️",
                        tipo: "Naturaleza"
                    },
                    {
                        nombre: "Mercado del Puerto",
                        descripcion: "Gastronomía tradicional uruguaya",
                        rating: 4.4,
                        imagen: "🍖",
                        tipo: "Gastronomía"
                    }
                ].map((lugar) => (
                    <div key={lugar.nombre} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="h-48 bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center text-6xl">
                            {lugar.imagen}
                        </div>
                        <div className="p-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                                    {lugar.tipo}
                                </span>
                                <div className="flex items-center gap-1">
                                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                    <span className="text-sm font-medium">{lugar.rating}</span>
                                </div>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-1">{lugar.nombre}</h3>
                            <p className="text-sm text-gray-600">{lugar.descripcion}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 