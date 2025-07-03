"use client"

import { 
  ChevronsUpDown,
  Heart,
  Plane,
  MessageSquare,
  User,
  Settings,
  Globe,
  HelpCircle,
  Home,
  UserPlus,
  LogOut,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import { useSidebar } from "@/hooks/use-sidebar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface NavUserProps {
  user: {
    name: string
    email: string
    avatar: string
  }
}
  
export function NavUser({ user }: NavUserProps) {
  const { expanded } = useSidebar()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="border-t flex p-3 cursor-pointer hover:bg-gray-50 transition-colors group relative">
          <Avatar className="h-10 w-10 rounded-lg">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="rounded-lg bg-indigo-100 text-indigo-800">
              {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
            </AvatarFallback>
          </Avatar>
          
          <div className={`flex justify-between items-center overflow-hidden ${expanded ? "w-52 ml-3" : "w-0"}`}>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user.name}</span>
              <span className="truncate text-xs">{user.email}</span>
            </div>
            <ChevronsUpDown className="ml-auto size-4" />
          </div>
        </div>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent
        className="w-56 rounded-lg mb-2"
        side="right"
        align="center"
        alignOffset={-100}
        sideOffset={-4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="rounded-lg bg-indigo-100 text-indigo-800">
                {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user.name}</span>
              <span className="truncate text-xs">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Heart />
            Listas de favoritos
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Plane />
            Viajes
          </DropdownMenuItem>
          <DropdownMenuItem>
            <MessageSquare />
            Mensajes
          </DropdownMenuItem>
          <DropdownMenuItem>
            <User />
            Perfil
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Settings />
            Configuración de la cuenta
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Globe />
            Idiomas y moneda
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HelpCircle />
            Centro de ayuda
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="items-start gap-3 py-3">
          <Home className="mt-0.5 shrink-0" />
          <div className="flex flex-col">
            <span className="text-sm font-medium">Conviértete en anfitrión</span>
            <span className="text-xs text-muted-foreground">
              Dar los primeros pasos como anfitrión y ganar dinero extra es muy fácil.
            </span>
          </div>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserPlus />
            Invitar compañero
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <LogOut />
          Cerrar sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 