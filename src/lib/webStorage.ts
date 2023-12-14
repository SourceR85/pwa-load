import { writable } from "svelte/store"

const KEY = "preferredScheme"

/** It just makes sense to initiate the store with the stored value */
const value = writable<string | null>(localStorage.getItem(KEY))

export const preferredScheme = {
	subscribe: value.subscribe,
	update: value.update,
	set(value: string | null) {
		if (value) localStorage.setItem(KEY, value)
		else localStorage.removeItem(KEY)
	},
}