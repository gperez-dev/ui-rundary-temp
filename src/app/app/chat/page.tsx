"use client";

import { MessageCircle, Send, Search, MapPin } from "lucide-react";

export default function ChatPage() {
    return (
        <div className="flex flex-row gap-4 h-full">
            {/* Panel de Chat */}
            <div className="bg-white border border-gray-200 flex-1 rounded-xl overflow-hidden h-full flex flex-col">
                {/* Header del Chat */}
                <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <MessageCircle className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                            <h2 className="font-semibold text-gray-900">Chat Principal</h2>
                            <p className="text-sm text-gray-500">5 participantes activos</p>
                        </div>
                    </div>
                </div>

                {/* Mensajes */}
                <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                    <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-800 text-sm font-medium">A</span>
                        </div>
                        <div className="flex-1">
                            <div className="bg-gray-100 rounded-lg p-3 max-w-md">
                                <p className="text-sm">¡Hola! ¿Cómo están todos?</p>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Ana • 10:30 AM</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 justify-end">
                        <div className="flex-1 flex justify-end">
                            <div className="bg-blue-500 text-white rounded-lg p-3 max-w-md">
                                <p className="text-sm">Todo bien, trabajando en el nuevo proyecto</p>
                            </div>
                        </div>
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-800 text-sm font-medium">T</span>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                            <span className="text-purple-800 text-sm font-medium">M</span>
                        </div>
                        <div className="flex-1">
                            <div className="bg-gray-100 rounded-lg p-3 max-w-md">
                                <p className="text-sm">¿Necesitan ayuda con algo específico?</p>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Mario • 10:35 AM</p>
                        </div>
                    </div>
                </div>

                {/* Input de mensaje */}
                <div className="p-4 border-t border-gray-200">
                    <div className="flex gap-2">
                        <input 
                            type="text" 
                            placeholder="Escribe un mensaje..." 
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                            <Send className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Panel de Mapa/Búsqueda */}
            <div className="bg-white border border-gray-200 flex-1 rounded-xl overflow-hidden h-full flex flex-col">
                {/* Tabs Header */}
                <div className="p-4 border-b border-gray-200">
                    <div className="flex gap-2">
                        <button className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium">
                            <Search className="h-4 w-4 inline mr-2" />
                            Búsqueda
                        </button>
                        <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-medium">
                            <MapPin className="h-4 w-4 inline mr-2" />
                            Mapa
                        </button>
                    </div>
                </div>

                {/* Contenido de búsqueda */}
                <div className="flex-1 p-4">
                    <div className="mb-4">
                        <input 
                            type="text" 
                            placeholder="Buscar lugares, personas..." 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    <div className="space-y-3">
                        <div className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                    <MapPin className="h-5 w-5 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900">Montevideo, Uruguay</h3>
                                    <p className="text-sm text-gray-500">Capital de Uruguay</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <MapPin className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900">Punta del Este</h3>
                                    <p className="text-sm text-gray-500">Destino turístico popular</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                    <MapPin className="h-5 w-5 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900">Colonia del Sacramento</h3>
                                    <p className="text-sm text-gray-500">Ciudad histórica</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
