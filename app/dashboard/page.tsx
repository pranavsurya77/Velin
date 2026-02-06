import { Logout } from "@/components/logout";
import { PageWrapper } from "@/components/page-wrapper";
import { Notebooks } from "@/components/notebooks";
import { getNotebooks } from "@/server/notebooks";
import { Notebook } from "lucide-react";
import { CreateNotebook } from "@/components/create-notebook";

export default async function Dashboard() {
    const notebooks = await getNotebooks()
    return (
        <PageWrapper breadcrumps={[
            {
                label: "Dashboard",
                href: "/dashboard"
            }
        ]}>
            <div className="flex justify-between items-center">
                <h1>Dashboard</h1>
                <CreateNotebook />
            </div>
            {
                notebooks.succes && notebooks?.notebooks?.map((notebook) => (
                    <div key={notebook.id}>
                        {notebook.name}
                    </div>
                ))
            }
            {
                notebooks.succes && notebooks?.notebooks?.length === 0 && (
                    <div>
                        <p>No notebooks found</p>
                    </div>
                )
            }
        </PageWrapper>
    );
}