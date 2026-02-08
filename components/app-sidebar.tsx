import * as React from "react"
import { ChevronRight } from "lucide-react"

import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { getNotebooks } from "@/server/notebooks"
import Image from "next/image"
import { File } from "lucide-react"
import { SidebarData } from "./sidebar-data"

// This is sample data.


export async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const notebooks = await getNotebooks();

  const data = {
    versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
    navMain: [
      ...notebooks?.notebooks?.map((notebook) => {
        return {
          title: notebook.name,
          url: `/dashboard/notebook/${notebook.id}`,
          items: notebook.notes.map((note) => {
            return {
              title: note.title,
              url: `/dashboard/notebook/${notebook.id}/note/${note.id}`,
            }
          }) || []
        }
      }) ?? []
    ],
  }
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="flex flex-row items-center gap-2 mb-2 mt-2">
          <Image src="/svgviewer-png-output(2).png" alt="Logo" width={24} height={24} />
          <h2 className="text-xl font-bold">Velin</h2>
        </div>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent className="gap-0">
        {/* We create a collapsible SidebarGroup for each parent. */}
        <SidebarData data={data} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
