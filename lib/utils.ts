import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function extractTextFromContent(content: any): string {
  if (!content) return "";
  if (typeof content === "string") return content;
  if (Array.isArray(content)) {
    return content.map(extractTextFromContent).join(" ");
  }
  if (content.type === "text") {
    return content.text;
  }
  if (content.content) {
    return extractTextFromContent(content.content);
  }
  return "";
}
