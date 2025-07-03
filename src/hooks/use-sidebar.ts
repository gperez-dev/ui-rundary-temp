import { useEffect, useState } from 'react'
import { useSidebarStore } from '@/lib/stores/sidebar-store'

export function useSidebar() {
  const [isHydrated, setIsHydrated] = useState(false)
  const { expanded, toggle, setExpanded } = useSidebarStore()

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  // Durante la hidratación, usar un valor por defecto
  if (!isHydrated) {
    return {
      expanded: true,
      toggle: () => {},
      setExpanded: () => {},
      isHydrated: false
    }
  }

  return {
    expanded,
    toggle,
    setExpanded,
    isHydrated: true
  }
} 