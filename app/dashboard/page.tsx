import { Logout } from "@/components/logout";
import { PageWrapper } from "@/components/page-wrapper";
import { CreateNotebook } from "@/components/create-notebook";
import { NotebookCard } from "@/components/notebook-card";
import { getNotebooks } from "@/server/notebooks";
import { Suspense } from "react";

export default async function Dashboard() {
    const notebooks = await getNotebooks()
    return (
        <Suspense>
            < PageWrapper breadcrumps={
                [
                    {
                        label: "Dashboard",
                        href: "/dashboard"
                    }
                ]} >
                <div className="flex w-full items-center justify-between">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
                        <p className="text-sm text-muted-foreground">Manage your notebooks and notes</p>
                    </div>
                    <CreateNotebook />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:grid-cols-4 mt-4">
                    {
                        notebooks.succes && notebooks?.notebooks?.map((notebook) => (
                            <NotebookCard key={notebook.id} notebook={notebook} />
                        ))
                    }
                </div>
                {
                    notebooks.succes && notebooks?.notebooks?.length === 0 && (
                        <div>
                            <p>No notebooks found</p>
                        </div>
                    )
                }
            </PageWrapper >
        </Suspense>
    );
}