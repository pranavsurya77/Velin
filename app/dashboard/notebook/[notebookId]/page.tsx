import { NoteCard } from "@/components/note-card";
import { PageWrapper } from "@/components/page-wrapper";
import RichTextEditor from "@/components/rich-text-editor";
import { getNotebookById } from "@/server/notebooks";
import { JSONContent } from "@tiptap/react";
import { CreateNote } from "@/components/create-note";


export default async function NotePage({ params }: { params: { notebookId: string } }) {
    const { notebookId } = await params;
    const notebook = await getNotebookById(notebookId);
    return (
        <PageWrapper breadcrumps={
            [
                {
                    label: "Dashboard",
                    href: "/dashboard"
                },
                {
                    label: notebook?.notebook?.name ?? "Notebook",
                    href: `/dashboard/notebook/${notebookId}`
                }
            ]
        }>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">
                    {notebook.notebook?.name}
                </h1>
                <CreateNote notebookId={notebookId} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                {notebook.notebook?.notes?.map((note) => (
                    <NoteCard key={note.id} note={note} />
                ))}
            </div>

        </PageWrapper>
    )
}