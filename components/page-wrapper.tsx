interface pageWrapperProps {
    children: React.ReactNode,
    breadcrumps: {
        label: string,
        href: string
    }[];
}

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SidebarTrigger } from "./ui/sidebar";
import { Logout } from "@/components/logout";
import { ModeToggle } from "./mode-toggle";
import { Fragment } from "react/jsx-runtime";


export function PageWrapper({ children, breadcrumps }: pageWrapperProps) {
    return (
        <div className="flex flex-col gap-4">
            <header className="flex items-center gap-4 p-4 border-b">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4">
                        <SidebarTrigger />
                        <Breadcrumb>
                            <BreadcrumbList>
                                {breadcrumps.map((breadcramp, index) => (
                                    <Fragment key={breadcramp.label}>
                                        <BreadcrumbItem>
                                            <BreadcrumbLink href={breadcramp.href}>{breadcramp.label}</BreadcrumbLink>
                                        </BreadcrumbItem>
                                        {index < breadcrumps.length - 1 && <BreadcrumbSeparator />}
                                    </Fragment>
                                ))}
                            </BreadcrumbList>
                        </Breadcrumb >
                    </div>
                    <div className="flex items-center gap-4">
                        <ModeToggle />
                        <Logout />
                    </div>
                </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0 ">
                {children}

            </div>
        </div>
    )
}