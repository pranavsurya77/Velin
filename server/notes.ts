"use server";

import { auth } from "@/lib/auth";
//get the client and types
import { prisma } from "@/lib/prisma";
import type { Notebooks, Notes } from "@/lib/prisma";
import { headers } from "next/headers";


export const createNote = async (values: Pick<Notes, "title" | "content" | "notebookId">) => {
    try {
        await prisma.notes.create({
            data: {
                title: values.title,
                content: values.content as any,
                notebookId: values.notebookId
            }
        })
        return {
            succes: true,
            message: "Note created successfully"
        }
    } catch (error) {
        return {
            succes: false,
            message: "Failed to create note"
        }
    }
}

export const getNotes = async () => {
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        })

        const userId = session?.user?.id

        if (!userId) {
            return {
                succes: false,
                message: "User not found"
            }
        }
        const notes = await prisma.notes.findMany({
            where: {
                notebook: {
                    userId: userId
                }
            }
        })
        return {
            succes: true,
            notes
        }
    } catch (error) {
        return {
            succes: false,
            message: "Failed to get notes"
        }
    }
}

export const getNoteById = async (id: string) => {
    try {
        const note = await prisma.notes.findUnique({
            where: {
                id: id
            },
            include: {
                notebook: true
            }
        })
        return {
            succes: true,
            note
        }
    } catch (error) {
        return {
            succes: false,
            message: "Failed to get note"
        }
    }
}

export const updateNote = async (id: string, values: Partial<Notes>) => {
    try {
        await prisma.notes.update({
            where: {
                id: id
            },
            data: {
                ...(values.title && { title: values.title }),
                ...(values.content !== undefined && { content: values.content as any }),
                ...(values.notebookId && { notebookId: values.notebookId })
            }
        })
        return {
            succes: true,
            message: "Note updated successfully"
        }
    } catch (error) {
        return {
            succes: false,
            message: "Failed to update note"
        }
    }
}

export const deleteNote = async (id: string) => {
    try {
        await prisma.notes.delete({
            where: {
                id: id
            }
        })
        return {
            succes: true,
            message: "Note deleted successfully"
        }
    } catch (error) {
        return {
            succes: false,
            message: "Failed to delete note"
        }
    }
}

