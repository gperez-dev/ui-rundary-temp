import { useEffect, useState } from 'react'
import { useOverlaySidebarStore } from '@/lib/stores/overlay-sidebar-store'

export function useOverlaySidebar() {
  const [isHydrated, setIsHydrated] = useState(false)
  const { visible, expanded, tempChatHighlight, open, close, toggleExpanded, setExpanded } = useOverlaySidebarStore()

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  // During hydration, use a default value and avoid showing the overlay
  if (!isHydrated) {
    return {
      visible: false,
      expanded: true,
      tempChatHighlight: false,
      open: () => {},
      close: () => {},
      toggleExpanded: () => {},
      setExpanded: () => {},
      isHydrated: false,
    }
  }

  return {
    visible,
    expanded,
    tempChatHighlight,
    open,
    close,
    toggleExpanded,
    setExpanded,
    isHydrated: true,
  }
} 