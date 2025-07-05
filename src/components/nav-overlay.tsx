"use client"

import { useOverlaySidebar } from "@/hooks/use-overlay-sidebar"
import OverlaySidebar from "@/components/overlay-sidebar"
import { Search, Plus } from "lucide-react"
import { useRouter } from "next/navigation"

export function NavOverlay() {
    const { visible, close } = useOverlaySidebar()
    const router = useRouter()

    if (!visible) {
        return null
    }

    return (
        <div className="fixed inset-0 z-50 flex">
            {/* Backdrop */}
            <div 
                onClick={close} 
                className="absolute inset-0"
                aria-hidden="true"
            />

            {/* Overlay Panel (no animation) */}
            <div className="relative z-50 flex h-full">
                {/* Collapsed sidebar clone */}
                <OverlaySidebar />

                {/* Chat history panel */}
                <div className="w-80 flex-shrink-0 border-r bg-background flex flex-col animate-slide-in">
                    <div className="p-4 border-b">
                        <h2 className="text-xl font-semibold">Chat</h2>
                        <p className="text-sm text-gray-500">Your recent conversations</p>
                    </div>
                    <div className="p-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search chats..."
                                className="w-full pl-10 pr-4 py-2 border rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-2">
                        {/* Placeholder for chat list */}
                        <p className="text-center text-gray-500">Chat list goes here.</p>
                    </div>
                    <div className="p-4 border-t">
                        <button
                            onClick={() => {
                                close()
                                router.push("/app/chat")
                            }}
                            className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                        >
                            <Plus size={18} />
                            <span>New Chat</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}