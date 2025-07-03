"use client";

import { Heart, MapPin, Star, Calendar, Trash2 } from "lucide-react";

export default function GuardadosPage() {
    return (
        <div className="flex flex-col gap-6 h-full">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Guardados</h1>
                    <p className="text-gray-600">Tus lugares y experiencias favoritas</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">12 elementos guardados</span>
                </div>
            </div>

            {/* Filtros */}
            <div className="flex gap-3 overflow-x-auto pb-2">
                {["Todos", "Restaurantes", "Hoteles", "Actividades", "Lugares"].map((filtro) => (
                    <button
                        key={filtro}
                        className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                            filtro === "Todos" 
                                ? "bg-red-100 text-red-800" 
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        {filtro}
                    </button>
                ))}
            </div>

            {/* Lista de guardados */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                {[
                    {
                        nombre: "Restaurante Parador",
                        ubicacion: "Montevideo",
                        tipo: "Restaurante",
                        rating: 4.8,
                        imagen: "🍽️",
                        fechaGuardado: "Hace 2 días",
                        descripcion: "Cocina uruguaya tradicional con vista al río"
                    },
                    {
                        nombre: "Hotel Cottage",
                        ubicacion: "Punta del Este",
                        tipo: "Hotel",
                        rating: 4.6,
                        imagen: "🏨",
                        fechaGuardado: "Hace 1 semana",
                        descripcion: "Hotel boutique frente al mar"
                    },
                    {
                        nombre: "Teatro Solís",
                        ubicacion: "Montevideo",
                        tipo: "Cultura",
                        rating: 4.9,
                        imagen: "🎭",
                        fechaGuardado: "Hace 3 días",
                        descripcion: "Teatro histórico con programación variada"
                    },
                    {
                        nombre: "Playa Brava",
                        ubicacion: "Punta del Este",
                        tipo: "Playa",
                        rating: 4.7,
                        imagen: "🏖️",
                        fechaGuardado: "Hace 5 días",
                        descripcion: "Playa icónica con La Mano escultura"
                    },
                    {
                        nombre: "Mercado Agrícola",
                        ubicacion: "Montevideo",
                        tipo: "Mercado",
                        rating: 4.5,
                        imagen: "🥬",
                        fechaGuardado: "Hace 1 día",
                        descripcion: "Productos frescos y comida local"
                    },
                    {
                        nombre: "Casapueblo",
                        ubicacion: "Punta Ballena",
                        tipo: "Arte",
                        rating: 4.8,
                        imagen: "🎨",
                        fechaGuardado: "Hace 4 días",
                        descripcion: "Museo y hotel del artista Carlos Páez Vilaró"
                    }
                ].map((item) => (
                    <div key={item.nombre} className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-red-50 to-pink-50 rounded-lg flex items-center justify-center text-2xl">
                                {item.imagen}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <h3 className="font-semibold text-gray-900 truncate">{item.nombre}</h3>
                                        <div className="flex items-center gap-1 text-sm text-gray-600">
                                            <MapPin className="h-3 w-3" />
                                            {item.ubicacion}
                                        </div>
                                    </div>
                                    <button className="text-red-500 hover:text-red-700 transition-colors">
                                        <Heart className="h-5 w-5 fill-current" />
                                    </button>
                                </div>
                                
                                <p className="text-sm text-gray-600 mb-3">{item.descripcion}</p>
                                
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                                            {item.tipo}
                                        </span>
                                        <div className="flex items-center gap-1">
                                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                                            <span className="text-xs font-medium">{item.rating}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-1 text-xs text-gray-500">
                                            <Calendar className="h-3 w-3" />
                                            {item.fechaGuardado}
                                        </div>
                                        <button className="text-gray-400 hover:text-red-500 transition-colors">
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Estado vacío (opcional) */}
            {false && (
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <Heart className="h-16 w-16 text-gray-300 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No tienes lugares guardados</h3>
                    <p className="text-gray-600 mb-4">Explora y guarda tus lugares favoritos para verlos aquí</p>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                        Explorar lugares
                    </button>
                </div>
            )}
        </div>
    );
} 