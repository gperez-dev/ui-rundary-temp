"use client";

import { PanelLeft, PanelRight } from "lucide-react"
import { createContext, useContext, ReactNode } from "react"
import { usePathname } from "next/navigation"
import { NavUser } from "./nav-user"
import { NavMain } from "./nav-main"
import { MessageCircle, Search, Briefcase, Heart, Sparkles, Settings, LifeBuoy } from "lucide-react"
import { Isotipo, Logotipo } from "./logos"
import { useSidebar } from "@/hooks/use-sidebar"

interface SidebarContextType {
    expanded: boolean;
}

const SidebarContext = createContext<SidebarContextType>({ expanded: true });

export { SidebarContext };

interface SidebarProps {
    children?: ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
    const { expanded, toggle } = useSidebar()
    const pathname = usePathname()
    
    // Datos del usuario (esto vendría de tu sistema de autenticación)
    const user = {
        name: "Gonzalo Perez",
        email: "gonzaloperez@gmail.com",
        avatar: "/api/placeholder/40/40" // O la URL de la imagen del usuario
    }

    // Configuración de navegación principal
    const mainNavItems = [
        {
            title: "Chat",
            url: "/app/chat",
            icon: MessageCircle,
            isActive: pathname === "/app/chat",
            alert: true
        },
        {
            title: "Explorar",
            url: "/app/explorar",
            icon: Search,
            isActive: pathname === "/app/explorar",
            alert: false
        },
        {
            title: "Guardados",
            url: "/app/guardados",
            icon: Heart,
            isActive: pathname === "/app/guardados",
            alert: false
        },
        {
            title: "Viajes",
            url: "/app/viajes",
            icon: Briefcase,
            isActive: pathname === "/app/viajes",
            alert: false
        },
        {
            title: "Inspiración",
            url: "/app/inspiracion",
            icon: Sparkles,
            isActive: pathname === "/app/inspiracion",
            alert: false
        }
    ]

    return (
        <aside 
            aria-label="Sidebar" 
            className={`
                fixed inset-y-0 left-0 z-50 flex flex-col
                bg-background border-r transition-all duration-300 ease-in-out
                ${expanded ? 'w-64' : 'w-16'}
                sm:relative sm:translate-x-0
            `}
        >
            {/* Header con logo y botón de colapso */}
            <div className="flex h-16 shrink-0 items-center justify-between px-4">
                <div className="group relative flex w-full items-center">
                    {/* Logo area */}
                    <div className={`overflow-hidden transition-all duration-300 ${expanded ? 'w-auto' : 'w-8'}`}>
                        <div className="flex items-center gap-3">
                            <Isotipo width={32} height={32} className="text-indigo-800 flex-shrink-0" />
                            {expanded && (
                                <Logotipo width={100} height={24} className="text-indigo-800 transition-opacity duration-300" />
                            )}
                        </div>
                    </div>
                    
                    {/* Botón de colapso */}
                    <div className={`absolute right-0 ${expanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-200'}`}>
                        <button 
                            onClick={toggle}
                            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                            aria-label={expanded ? "Colapsar sidebar" : "Expandir sidebar"}
                        >
                            {expanded ? <PanelLeft size={20} /> : <PanelRight size={20} />}
                        </button>
                    </div>
                </div>
            </div>



            {/* Navegación principal */}
            <SidebarContext.Provider value={{ expanded }}>
                <div className="flex-1 px-2">
                    <NavMain items={mainNavItems} />
                    {children}
                </div>


            </SidebarContext.Provider>

            {/* Usuario en la parte inferior */}
            <div>
                <NavUser user={user} />
            </div>
        </aside>
    )
}

