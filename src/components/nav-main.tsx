"use client"

import { type LucideIcon } from "lucide-react"
import { useSidebar } from "@/hooks/use-sidebar"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    alert?: boolean
  }[]
}) {
  return (
    <div style={{ position: 'relative' }}>
      <ul data-orientation="vertical" className="flex flex-col gap-2" dir="ltr">
        {items.map((item) => (
          <NavItem
            key={item.title}
            title={item.title}
            url={item.url}
            icon={item.icon}
            isActive={item.isActive}
            alert={item.alert}
          />
        ))}
      </ul>
    </div>
  )
}

function NavItem({
  title,
  url,
  icon: Icon,
  isActive = false,
  alert = false,
}: {
  title: string
  url: string
  icon?: LucideIcon
  isActive?: boolean
  alert?: boolean
}) {
  const { expanded } = useSidebar()
  
  const baseClasses = `
    group/button flex items-center gap-3 rounded-lg px-3 py-2 text-sm
    transition-colors w-full text-gray-700 bg-transparent hover:bg-foreground/5
    disabled:pointer-events-none disabled:opacity-50
  `

  const tooltipContent = !expanded ? (
    <Tooltip>
      <TooltipTrigger asChild>
        <a 
          href={url} 
          className={baseClasses}
          aria-label={title}
          aria-current={isActive ? "page" : undefined}
          data-active={isActive ? "" : undefined}
          data-state={isActive ? "active" : "closed"}
        >
          {Icon && (
            <Icon 
              size={20}
              strokeWidth={2}
              className={`shrink-0 group-hover:scale-105 transition-transform ${
                isActive ? "text-indigo-600" : ""
              }`}
            />
          )}
          
          {/* Texto del item */}
          <span className={`
            overflow-hidden whitespace-nowrap transition-all duration-300 font-medium
            ${expanded ? "w-auto opacity-100" : "w-0 opacity-0"}
          `}>
            {title}
          </span>
          
          {/* Indicador de alerta - nuevo estilo */}
          {alert && (
            <span className={`ml-auto transition-all duration-300 ${expanded ? "sm:hidden xl:block" : "hidden"}`}>
              <span className="inline-flex items-center font-medium whitespace-nowrap shrink-0 rounded-full justify-center bg-foreground/5 text-foreground/70 text-3xs h-4 min-w-4 leading-none px-[.625em]">
                2
              </span>
            </span>
          )}
        </a>
      </TooltipTrigger>
      <TooltipContent side="right" sideOffset={12}>
        {title}
      </TooltipContent>
    </Tooltip>
  ) : (
    <a 
      href={url} 
      className={baseClasses}
      aria-label={title}
      aria-current={isActive ? "page" : undefined}
      data-active={isActive ? "" : undefined}
      data-state={isActive ? "active" : "closed"}
    >
      {Icon && (
        <Icon 
          size={20}
          strokeWidth={2}
          className={`shrink-0 group-hover:scale-105 transition-transform ${
            isActive ? "text-indigo-600" : ""
          }`}
        />
      )}
      
      {/* Texto del item */}
      <span className={`
        overflow-hidden whitespace-nowrap transition-all duration-300 font-medium
        ${expanded ? "w-auto opacity-100" : "w-0 opacity-0"}
      `}>
        {title}
      </span>
      
      {/* Indicador de alerta - nuevo estilo */}
      {alert && (
        <span className={`ml-auto transition-all duration-300 ${expanded ? "sm:hidden xl:block" : "hidden"}`}>
          <span className="inline-flex items-center font-medium whitespace-nowrap shrink-0 rounded-full justify-center bg-foreground/5 text-foreground/70 text-3xs h-4 min-w-4 leading-none px-[.625em]">
            2
          </span>
        </span>
      )}
    </a>
  )

  return (
    <li className="relative">
      {/* Indicador de página activa - solo cuando está colapsado */}
      {!expanded && isActive && (
        <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-6 bg-indigo-600 rounded-l-full transition-all duration-300 z-10" />
      )}
      
      {tooltipContent}
    </li>
  )
}
