"use server";

import { auth } from "@/lib/auth";
//get the client and types
import { prisma } from "@/lib/prisma";
import type { Notebooks, Notes } from "@/lib/prisma";
import { headers } from "next/headers";


export const createNotebook = async (values: Pick<Notebooks, "name" | "userId">) => {
    try {
        await prisma.notebooks.create({
            data: values
        })
        return {
            succes: true,
            message: "Notebook created successfully"
        }
    } catch (error) {
        return {
            succes: false,
            message: "Failed to create notebook"
        }
    }
}

export const getNotebooks = async () => {
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
        const notebooks = await prisma.notebooks.findMany({
            where: {
                userId: userId
            }
        })
        return {
            succes: true,
            notebooks
        }
    } catch (error) {
        return {
            succes: false,
            message: "Failed to get notebooks"
        }
    }
}

export const getNotebookById = async (id: string) => {
    try {
        const notebook = await prisma.notebooks.findUnique({
            where: {
                id: id
            }
        })
        return {
            succes: true,
            notebook
        }
    } catch (error) {
        return {
            succes: false,
            message: "Failed to get notebook"
        }
    }
}

export const updateNotebook = async (id: string, values: Notebooks) => {
    try {
        await prisma.notebooks.update({
            where: {
                id: id
            },
            data: values
        })
        return {
            succes: true,
            message: "Notebook updated successfully"
        }
    } catch (error) {
        return {
            succes: false,
            message: "Failed to update notebook"
        }
    }
}

export const deleteNoteboook = async (id: string) => {
    try {
        await prisma.notebooks.delete({
            where: {
                id: id
            }
        })
        return {
            succes: true,
            message: "Notebook deleted successfully"
        }
    } catch (error) {
        return {
            succes: false,
            message: "Failed to delete notebook"
        }
    }
}

