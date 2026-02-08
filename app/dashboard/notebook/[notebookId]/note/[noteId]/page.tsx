import { PageWrapper } from "@/components/page-wrapper";
import RichTextEditor from "@/components/rich-text-editor";
import { getNotes, getNoteById } from "@/server/notes";
import { JSONContent } from "@tiptap/react";

export default async function NotePage({ params }: { params: { noteId: string } }) {
    const { noteId } = await params;
    const note = await getNoteById(noteId);
    console.log(note);
    return (
        <PageWrapper breadcrumps={
            [
                {
                    label: "Dashboard",
                    href: "/dashboard"
                },
                {
                    label: note.note?.notebook?.name ?? "Notebook",
                    href: `/dashboard/notebook/${note.note?.notebookId}`
                },
                {
                    label: note.note?.title ?? "Note",
                    href: `/dashboard/notebook/${note.note?.notebookId}/note/${noteId}`
                }
            ]
        }>
            <div>{note.note?.title}</div>
            <RichTextEditor content={note.note?.content as JSONContent} noteId={noteId} />
        </PageWrapper>
    )
}