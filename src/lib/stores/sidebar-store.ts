import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface SidebarState {
  expanded: boolean
  setExpanded: (expanded: boolean) => void
  toggle: () => void
}

export const useSidebarStore = create<SidebarState>()(
  persist(
    (set, get) => ({
      expanded: true,
      setExpanded: (expanded: boolean) => set({ expanded }),
      toggle: () => set({ expanded: !get().expanded }),
    }),
    {
      name: 'sidebar-storage', // nombre para localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
) 