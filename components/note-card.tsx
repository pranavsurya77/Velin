"use client";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Notes } from "@/lib/prisma";
import { Button } from "./ui/button";
import Link from "next/link";
import { Loader2, Trash2 } from "lucide-react";
import { deleteNote } from "@/server/notes";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface NoteCardProps {
    note: Notes & { notes?: any[] };
}

export function NoteCard({ note }: NoteCardProps) {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        try {
            setIsDeleting(true);
            const response = await deleteNote(note.id)
            if (response.succes) {
                toast.success(response.message)
                router.refresh()
            }
        } catch (error) {
            toast.error("Failed to delete note")
        } finally {
            setIsDeleting(false);
        }
    }

    return (
        <Card className="group relative h-full transition-all duration-200 border-border/60 hover:border-primary/50 hover:shadow-sm bg-card">
            <Link
                href={`/dashboard/notebook/${note.notebookId}/note/${note.id}`}
                className="absolute inset-0 z-10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
            >
                <span className="sr-only">View note {note.title}</span>
            </Link>
            <CardHeader className="pt-4 pb-2 px-4">
                <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base font-semibold tracking-tight line-clamp-1 leading-normal">
                        {note.title}
                    </CardTitle>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 text-muted-foreground hover:text-destructive hover:bg-destructive/10 shrink-0 transition-all -mr-1 relative z-20"
                                disabled={isDeleting}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {isDeleting ? <Loader2 className="h-3 w-3 animate-spin" /> : <Trash2 className="h-3 w-3" />}
                                <span className="sr-only">Delete</span>
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent onClick={(e) => e.stopPropagation()}>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete the notebook
                                    and remove your data from our servers.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel onClick={(e) => e.stopPropagation()}>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={(e) => {
                                    e.stopPropagation();
                                    handleDelete();
                                }}>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </CardHeader>
            <CardContent className="px-4 pb-4">
                <p className="text-xs text-muted-foreground font-medium line-clamp-2">
                    {note.createdAt.toDateString()}
                </p>
            </CardContent>
        </Card>
    );
}   