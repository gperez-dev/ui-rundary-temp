"use client";

import { Sparkles, Eye, Heart, Share2, Bookmark, MapPin, Clock } from "lucide-react";

export default function InspiracionPage() {
    return (
        <div className="flex flex-col gap-6 h-full">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Inspiración</h1>
                    <p className="text-gray-600">Descubre ideas para tu próximo viaje</p>
                </div>
            </div>

            {/* Categorías de inspiración */}
            <div className="flex gap-3 overflow-x-auto pb-2">
                {["Tendencias", "Aventura", "Relax", "Cultura", "Gastronomía", "Naturaleza", "Urbano"].map((categoria) => (
                    <button
                        key={categoria}
                        className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                            categoria === "Tendencias" 
                                ? "bg-purple-100 text-purple-800" 
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        {categoria}
                    </button>
                ))}
            </div>

            {/* Grid de inspiración */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
                {[
                    {
                        titulo: "Los colores del otoño en Tacuarembó",
                        descripcion: "Descubre los paisajes dorados y rojizos que pintan el interior uruguayo durante el otoño",
                        ubicacion: "Tacuarembó, Uruguay",
                        imagen: "🍂",
                        tipo: "Naturaleza",
                        vistas: 1240,
                        likes: 89,
                        autor: "María González",
                        tiempoLectura: "3 min"
                    },
                    {
                        titulo: "Ruta gastronómica por Montevideo",
                        descripcion: "Un recorrido por los mejores restaurantes y mercados de la capital uruguaya",
                        ubicacion: "Montevideo, Uruguay",
                        imagen: "🍽️",
                        tipo: "Gastronomía",
                        vistas: 2156,
                        likes: 156,
                        autor: "Chef Roberto",
                        tiempoLectura: "5 min"
                    },
                    {
                        titulo: "Aventura en kayak por la Laguna Garzón",
                        descripcion: "Explora uno de los ecosistemas más únicos de la costa atlántica uruguaya",
                        ubicacion: "Rocha, Uruguay",
                        imagen: "🚣",
                        tipo: "Aventura",
                        vistas: 987,
                        likes: 74,
                        autor: "Aventura UY",
                        tiempoLectura: "4 min"
                    },
                    {
                        titulo: "Arte urbano en el Barrio Sur",
                        descripcion: "Un paseo por los murales y expresiones artísticas del histórico barrio montevideano",
                        ubicacion: "Montevideo, Uruguay",
                        imagen: "🎨",
                        tipo: "Cultura",
                        vistas: 1654,
                        likes: 112,
                        autor: "Arte Callejero",
                        tiempoLectura: "6 min"
                    },
                    {
                        titulo: "Wellness en las termas del litoral",
                        descripcion: "Relájate en las aguas termales naturales de Salto y Paysandú",
                        ubicacion: "Salto, Uruguay",
                        imagen: "♨️",
                        tipo: "Relax",
                        vistas: 1432,
                        likes: 98,
                        autor: "Bienestar UY",
                        tiempoLectura: "4 min"
                    },
                    {
                        titulo: "Observación de ballenas en La Paloma",
                        descripcion: "La temporada perfecta para avistar ballenas francas australes en la costa uruguaya",
                        ubicacion: "La Paloma, Uruguay",
                        imagen: "🐋",
                        tipo: "Naturaleza",
                        vistas: 2341,
                        likes: 189,
                        autor: "Vida Marina",
                        tiempoLectura: "7 min"
                    }
                ].map((articulo) => (
                    <article key={articulo.titulo} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                        {/* Imagen/Header */}
                        <div className="h-48 bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center text-6xl relative">
                            {articulo.imagen}
                            <div className="absolute top-3 left-3">
                                <span className="px-2 py-1 bg-white/90 text-xs font-medium text-gray-700 rounded-full">
                                    {articulo.tipo}
                                </span>
                            </div>
                            <div className="absolute top-3 right-3">
                                <button className="p-1.5 bg-white/90 rounded-full hover:bg-white transition-colors">
                                    <Bookmark className="h-4 w-4 text-gray-600" />
                                </button>
                            </div>
                        </div>

                        {/* Contenido */}
                        <div className="p-4">
                            <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                                <MapPin className="h-3 w-3" />
                                {articulo.ubicacion}
                            </div>
                            
                            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                                {articulo.titulo}
                            </h3>
                            
                            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                {articulo.descripcion}
                            </p>

                            {/* Meta información */}
                            <div className="flex items-center justify-between text-xs text-gray-500">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1">
                                        <Eye className="h-3 w-3" />
                                        {articulo.vistas.toLocaleString()}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Heart className="h-3 w-3" />
                                        {articulo.likes}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-3 w-3" />
                                        {articulo.tiempoLectura}
                                    </div>
                                </div>
                                <button className="hover:text-gray-700 transition-colors">
                                    <Share2 className="h-3 w-3" />
                                </button>
                            </div>

                            {/* Autor */}
                            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                                        <span className="text-xs font-medium text-indigo-800">
                                            {articulo.autor.charAt(0)}
                                        </span>
                                    </div>
                                    <span className="text-xs text-gray-600">{articulo.autor}</span>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* Cargar más */}
            <div className="flex justify-center">
                <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Cargar más artículos
                </button>
            </div>

            {/* Estado vacío (opcional) */}
            {false && (
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <Sparkles className="h-16 w-16 text-gray-300 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No hay contenido disponible</h3>
                    <p className="text-gray-600 mb-4">Vuelve pronto para descubrir nuevas ideas de viaje</p>
                </div>
            )}
        </div>
    );
} 