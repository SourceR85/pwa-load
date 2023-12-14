import type { PageLoad } from "./$types";
import { get } from "svelte/store";

/*
This will break with this message:
node:internal/event_target:1083
  process.nextTick(() => { throw err; });
                           ^
ReferenceError [Error]: localStorage is not defined
*/
import { preferredScheme } from "$lib/webStorage";

export const load: PageLoad = async () => {
	// I prefer to avoid dynamic imports, but this is necessary:
	// const { preferredScheme } = await import("$lib/webStorage")

	return {
		preferredScheme: get(preferredScheme)
	}
}
