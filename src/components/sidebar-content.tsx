"use client";

import { ReactNode } from "react"
import { usePathname } from "next/navigation"
import { NavUser } from "./nav-user"
import { NavMain } from "./nav-main"
import { MessageCircle, Search, Briefcase, Heart, Sparkles } from "lucide-react"
import { Isotipo, Logotipo } from "./logos"
import { PanelLeft, PanelRight } from "lucide-react"
import { useOverlaySidebar } from "@/hooks/use-overlay-sidebar"

interface SidebarContentProps {
  expanded: boolean
  onCollapseButtonClickAction: () => void
  children?: ReactNode
}

export default function SidebarContent({
  expanded,
  onCollapseButtonClickAction,
  children,
}: SidebarContentProps) {
  const pathname = usePathname()
  const { tempChatHighlight } = useOverlaySidebar()

  // Datos del usuario (esto vendría de tu sistema de autenticación)
  const user = {
    name: "Gonzalo Perez",
    email: "gonzaloperez@gmail.com",
    avatar: "/api/placeholder/40/40",
  }

  const mainNavItems = [
    {
      title: "Chat",
      url: "/app/chat",
      icon: MessageCircle,
      isActive: pathname === "/app/chat" || tempChatHighlight,
      alert: false,
    },
    {
      title: "Explorar",
      url: "/app/explorar",
      icon: Search,
      isActive: !tempChatHighlight && pathname === "/app/explorar",
      alert: false,
    },
    {
      title: "Guardados",
      url: "/app/guardados",
      icon: Heart,
      isActive: !tempChatHighlight && pathname === "/app/guardados",
      alert: false,
    },
    {
      title: "Viajes",
      url: "/app/viajes",
      icon: Briefcase,
      isActive: !tempChatHighlight && pathname === "/app/viajes",
      alert: false,
    },
    {
      title: "Inspiración",
      url: "/app/inspiracion",
      icon: Sparkles,
      isActive: !tempChatHighlight && pathname === "/app/inspiracion",
      alert: false,
    },
  ]

  return (
    <>
      {/* Header con logo y botón de colapso */}
      <div className="flex h-16 shrink-0 items-center justify-between px-4">
        <div className="group relative flex w-full items-center">
          {/* Logo area */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              expanded ? "w-auto" : "w-8"
            }`}
          >
            <div className="flex items-center gap-3">
              <Isotipo
                width={32}
                height={32}
                className="text-indigo-800 flex-shrink-0"
              />
              {expanded && (
                <Logotipo
                  width={100}
                  height={24}
                  className="text-indigo-800 transition-opacity duration-300"
                />
              )}
            </div>
          </div>

          {/* Botón de colapso */}
          <div
            className={`absolute right-0 ${
              expanded
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-200"
            }`}
          >
            <button
              onClick={onCollapseButtonClickAction}
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              aria-label={expanded ? "Colapsar sidebar" : "Expandir sidebar"}
            >
              {expanded ? <PanelLeft size={20} /> : <PanelRight size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Navegación principal */}
      <div className="flex-1 px-2">
        <NavMain items={mainNavItems} expanded={expanded} />
        {children}
      </div>

      {/* Usuario en la parte inferior */}
      <div>
        <NavUser user={user} />
      </div>
    </>
  )
} 