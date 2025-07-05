import { create } from 'zustand'

interface OverlaySidebarState {
  visible: boolean
  expanded: boolean
  tempChatHighlight: boolean
  open: () => void
  close: () => void
  setExpanded: (expanded: boolean) => void
  toggleExpanded: () => void
}

export const useOverlaySidebarStore = create<OverlaySidebarState>((set, get) => ({
  visible: false,
  expanded: false,
  tempChatHighlight: false,
  open: () => set({ visible: true, tempChatHighlight: true }),
  close: () => set({ visible: false, tempChatHighlight: false }),
  setExpanded: (expanded: boolean) => set({ expanded }),
  toggleExpanded: () => set({ expanded: !get().expanded }),
})) 