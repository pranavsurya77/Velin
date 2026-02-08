"use client";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { File } from "lucide-react"
import { ChevronRight } from "lucide-react"
import { useQueryState } from "nuqs";

interface SidebarDataProps {
    data: {
        navMain: {
            title: string;
            items: {
                title: string;
                url: string;
            }[];
        }[];
    }
}

export function SidebarData({ data }: SidebarDataProps) {
    const [search] = useQueryState("search", { defaultValue: "" });

    const filteredData = data.navMain.map((item) => {
        const matchesNotebook = item.title.toLowerCase().includes(search.toLowerCase());
        const matchingNotes = item.items.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()));

        if (matchesNotebook || matchingNotes.length > 0) {
            return {
                ...item,
                items: matchesNotebook ? item.items : matchingNotes
            };
        }
        return null;
    }).filter((item) => item !== null) as typeof data.navMain;

    return (
        <>
            {
                filteredData.map((item) => (
                    <Collapsible
                        key={item.title}
                        title={item.title}
                        defaultOpen
                        className="group/collapsible"
                        disabled={item.items.length === 0}
                    >
                        <SidebarGroup>
                            <SidebarGroupLabel
                                asChild
                                className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm"
                            >
                                <CollapsibleTrigger>
                                    {item.title}{" "}
                                    {item.items.length > 0 && (
                                        <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                                    )}
                                </CollapsibleTrigger>
                            </SidebarGroupLabel>
                            <CollapsibleContent>
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        {item.items.map((note) => (
                                            <SidebarMenuItem key={note.title}>
                                                <SidebarMenuButton asChild isActive={false}>
                                                    <a href={note.url}>
                                                        <File />
                                                        {note.title}
                                                    </a>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        ))}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </CollapsibleContent>
                        </SidebarGroup>
                    </Collapsible>
                ))
            }
        </>
    )
}
