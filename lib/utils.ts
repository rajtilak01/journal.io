import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function dateConverter(createdAt: string) {
  const dateObj = new Date(createdAt);

  const date = dateObj.toISOString().split("T")[0]; 
  const time = dateObj.toISOString().split("T")[1].split(":").slice(0, 2).join(":");
  return { date, time };
} 
