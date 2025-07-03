"use client";

import { Briefcase, Calendar, MapPin, Users, Plus, Clock, Plane } from "lucide-react";

export default function ViajesPage() {
    return (
        <div className="flex flex-col gap-6 h-full">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Mis Viajes</h1>
                    <p className="text-gray-600">Planifica y organiza tus próximas aventuras</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    <Plus className="h-4 w-4" />
                    Nuevo Viaje
                </button>
            </div>

            {/* Filtros de estado */}
            <div className="flex gap-3 overflow-x-auto pb-2">
                {["Todos", "Próximos", "En curso", "Completados", "Borradores"].map((estado) => (
                    <button
                        key={estado}
                        className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                            estado === "Todos" 
                                ? "bg-blue-100 text-blue-800" 
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        {estado}
                    </button>
                ))}
            </div>

            {/* Lista de viajes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
                {[
                    {
                        titulo: "Escapada a Punta del Este",
                        destino: "Punta del Este, Uruguay",
                        fechas: "15-20 Dic 2024",
                        estado: "Próximo",
                        participantes: 4,
                        imagen: "🏖️",
                        progreso: 85,
                        actividades: ["Hotel reservado", "Vuelos confirmados", "Restaurantes seleccionados"],
                        presupuesto: "$2,400"
                    },
                    {
                        titulo: "Ruta Histórica Colonial",
                        destino: "Colonia del Sacramento",
                        fechas: "8-10 Ene 2025",
                        estado: "Planificando",
                        participantes: 2,
                        imagen: "🏰",
                        progreso: 45,
                        actividades: ["Investigando hoteles", "Planificando itinerario"],
                        presupuesto: "$800"
                    },
                    {
                        titulo: "Aventura en Cabo Polonio",
                        destino: "Cabo Polonio, Rocha",
                        fechas: "22-25 Feb 2025",
                        estado: "Borrador",
                        participantes: 6,
                        imagen: "🌊",
                        progreso: 20,
                        actividades: ["Idea inicial", "Buscando fechas"],
                        presupuesto: "$1,200"
                    },
                    {
                        titulo: "Fin de semana en Montevideo",
                        destino: "Montevideo, Uruguay",
                        fechas: "5-7 Nov 2024",
                        estado: "Completado",
                        participantes: 3,
                        imagen: "🏛️",
                        progreso: 100,
                        actividades: ["Viaje completado", "Fotos subidas", "Reseñas escritas"],
                        presupuesto: "$600"
                    }
                ].map((viaje) => (
                    <div key={viaje.titulo} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                        {/* Header del viaje */}
                        <div className="p-4 border-b border-gray-100">
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center text-xl">
                                        {viaje.imagen}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{viaje.titulo}</h3>
                                        <div className="flex items-center gap-1 text-sm text-gray-600">
                                            <MapPin className="h-3 w-3" />
                                            {viaje.destino}
                                        </div>
                                    </div>
                                </div>
                                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                    viaje.estado === "Próximo" ? "bg-green-100 text-green-800" :
                                    viaje.estado === "Planificando" ? "bg-yellow-100 text-yellow-800" :
                                    viaje.estado === "Borrador" ? "bg-gray-100 text-gray-800" :
                                    "bg-blue-100 text-blue-800"
                                }`}>
                                    {viaje.estado}
                                </span>
                            </div>

                            {/* Información del viaje */}
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div className="flex items-center gap-1 text-gray-600">
                                    <Calendar className="h-3 w-3" />
                                    {viaje.fechas}
                                </div>
                                <div className="flex items-center gap-1 text-gray-600">
                                    <Users className="h-3 w-3" />
                                    {viaje.participantes} personas
                                </div>
                                <div className="flex items-center gap-1 text-gray-600">
                                    <Briefcase className="h-3 w-3" />
                                    {viaje.presupuesto}
                                </div>
                            </div>
                        </div>

                        {/* Progreso */}
                        <div className="p-4 border-b border-gray-100">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-gray-700">Progreso de planificación</span>
                                <span className="text-sm text-gray-600">{viaje.progreso}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        viaje.progreso === 100 ? "bg-green-500" :
                                        viaje.progreso >= 70 ? "bg-blue-500" :
                                        viaje.progreso >= 40 ? "bg-yellow-500" :
                                        "bg-gray-400"
                                    }`}
                                    style={{ width: `${viaje.progreso}%` }}
                                />
                            </div>
                        </div>

                        {/* Actividades recientes */}
                        <div className="p-4">
                            <h4 className="text-sm font-medium text-gray-700 mb-2">Actividades recientes</h4>
                            <div className="space-y-1">
                                {viaje.actividades.map((actividad, index) => (
                                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                                        {actividad}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Estado vacío (opcional) */}
            {false && (
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <Plane className="h-16 w-16 text-gray-300 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No tienes viajes planificados</h3>
                    <p className="text-gray-600 mb-4">Comienza a planificar tu próxima aventura</p>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                        Crear primer viaje
                    </button>
                </div>
            )}
        </div>
    );
} 