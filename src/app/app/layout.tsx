import Sidebar from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider } from "@/components/providers/sidebar-provider";

export default async function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen bg-gray-50">
                <Sidebar />
                
                {/* Overlay para móvil cuando el sidebar está abierto */}
                <div className="fixed inset-0 z-40 bg-black/50 sm:hidden" style={{ display: 'none' }} />
                
                <div className="flex flex-col flex-1 sm:ml-0">
                    <header className="flex h-16 shrink-0 items-center px-4 bg-white border-b">
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-2">
                                {/* Aquí podrías agregar SidebarTrigger si lo necesitas */}
                                <Separator
                                    orientation="vertical"
                                    className="mr-2 data-[orientation=vertical]:h-6"
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="font-medium">Chat</p>
                            </div>
                        </div>
                    </header>
                    
                    <main className="flex-1 overflow-auto p-6">
                        {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>
    );
}


