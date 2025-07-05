"use client";

import { ReactNode } from "react"
import { useSidebar } from "@/hooks/use-sidebar"
import SidebarContent from "./sidebar-content"

interface SidebarProps {
    children?: ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
    const { expanded, toggle } = useSidebar()

    return (
        <aside
            aria-label="Sidebar"
            className={`
                sticky top-0 left-0 z-50 self-start h-screen flex flex-col
                bg-background border-r transition-all duration-300 ease-in-out
                ${expanded ? 'w-64' : 'w-16'}
            `}
        >
            <SidebarContent expanded={expanded} onCollapseButtonClickAction={toggle}>
                {children}
            </SidebarContent>
        </aside>
    )
}

