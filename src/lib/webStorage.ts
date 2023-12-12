import { writable } from "svelte/store"

const KEY = "preferredScheme"
const value = writable<string | null>(localStorage.getItem(KEY))

export const preferredScheme = {
	subscribe: value.subscribe,
	update: value.update,
	set(value: string | null) {
		if (value) localStorage.setItem(KEY, value)
		else localStorage.removeItem(KEY)
	},
}