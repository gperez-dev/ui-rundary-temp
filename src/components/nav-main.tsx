"use client"

import { type LucideIcon } from "lucide-react"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { useOverlaySidebar } from "@/hooks/use-overlay-sidebar"
import Link from "next/link"

export function NavMain({
  items,
  expanded,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    alert?: boolean
  }[]
  expanded: boolean
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
            expanded={expanded}
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
  expanded,
}: {
  title: string
  url: string
  icon?: LucideIcon
  isActive?: boolean
  alert?: boolean
  expanded: boolean
}) {
  const { visible, open: openOverlay, close: closeOverlay } = useOverlaySidebar()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (title === "Chat") {
      // Toggle overlay visibility when Chat item is clicked
      e.preventDefault()
      if (visible) {
        closeOverlay()
      } else {
        openOverlay()
      }
      return
    }

    // If any other item is clicked while the overlay is visible, close it
    if (visible) {
      closeOverlay()
    }
  }

  const baseClasses = `
    group/button flex items-center gap-3 rounded-lg px-3 py-2 text-sm
    transition-colors w-full text-gray-700 bg-transparent hover:bg-foreground/5
    disabled:pointer-events-none disabled:opacity-50
  `

  const linkElement = (
    <Link
      href={url}
      prefetch
      onClick={handleClick}
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
      <span
        className={`
          overflow-hidden whitespace-nowrap transition-all duration-300 font-medium
          ${expanded ? "w-auto opacity-100" : "w-0 opacity-0"}
        `}
      >
        {title}
      </span>

      {/* Indicador de alerta */}
      {alert && (
        <span
          className={`ml-auto transition-all duration-300 ${
            expanded ? "sm:hidden xl:block" : "hidden"
          }`}
        >
          <span className="inline-flex items-center font-medium whitespace-nowrap shrink-0 rounded-full justify-center bg-foreground/5 text-foreground/70 text-3xs h-4 min-w-4 leading-none px-[.625em]">
            2
          </span>
        </span>
      )}
    </Link>
  )

  return (
    <li className="relative">
      {/* Active page indicator when collapsed */}
      {!expanded && isActive && (
        <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-6 bg-indigo-600 rounded-l-full transition-all duration-300 z-10" />
      )}

      {!expanded ? (
        <Tooltip>
          <TooltipTrigger asChild>{linkElement}</TooltipTrigger>
          <TooltipContent side="right" sideOffset={12}>
            {title}
          </TooltipContent>
        </Tooltip>
      ) : (
        linkElement
      )}
    </li>
  )
}
