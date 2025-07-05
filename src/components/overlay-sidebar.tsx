"use client";

import { ReactNode } from "react"
import { useOverlaySidebar } from "@/hooks/use-overlay-sidebar"
import { useSidebar } from "@/hooks/use-sidebar"
import SidebarContent from "./sidebar-content"

interface OverlaySidebarProps {
    children?: ReactNode;
}

export default function OverlaySidebar({ children }: OverlaySidebarProps) {
    const { expanded, toggleExpanded, close } = useOverlaySidebar()
    const { setExpanded: setMainSidebarExpanded } = useSidebar()
    
    return (
        <section
            aria-label="Overlay Sidebar"
            className={`flex flex-col flex-shrink-0 bg-background border-r ${expanded ? 'w-64' : 'w-16'}`}
        >
            <SidebarContent
                expanded={expanded}
                onCollapseButtonClickAction={() => {
                    if (expanded) {
                        toggleExpanded()
                    } else {
                        close()
                        setMainSidebarExpanded(true)
                    }
                }}
            >
                {children}
            </SidebarContent>
        </section>
    )
} 