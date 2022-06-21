import { readable, writable } from "svelte/store";

export const baseURL = readable("http://localhost:3000");

export const user = writable(null);
export const admin = writable(null);
