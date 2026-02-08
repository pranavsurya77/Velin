"use client";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Notebooks } from "@/lib/prisma";
import { Button } from "./ui/button";
import Link from "next/link";
import { Loader2, Trash2 } from "lucide-react";
import { deleteNoteboook } from "@/server/notebooks";
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

interface NotebookCardProps {
    notebook: Notebooks & { notes?: any[] };
}

export function NotebookCard({ notebook }: NotebookCardProps) {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        try {
            setIsDeleting(true);
            const response = await deleteNoteboook(notebook.id)
            if (response.succes) {
                toast.success(response.message)
                router.refresh()
            }
        } catch (error) {
            toast.error("Failed to delete notebook")
        } finally {
            setIsDeleting(false);
        }
    }

    const noteCount = notebook.notes?.length ?? 0;

    return (
        <Card className="group relative h-full transition-all duration-200 border-border/60 hover:border-primary/50 hover:shadow-sm bg-card">
            <Link
                href={`/dashboard/notebook/${notebook.id}`}
                className="absolute inset-0 z-10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
            >
                <span className="sr-only">View notebook {notebook.name}</span>
            </Link>
            <CardHeader className="pt-4 pb-2 px-4">
                <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base font-semibold tracking-tight line-clamp-1 leading-normal">
                        {notebook.name}
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
                <p className="text-xs text-muted-foreground font-medium">
                    {noteCount} {noteCount === 1 ? "Note" : "Notes"}
                </p>
            </CardContent>
        </Card>
    );
}   