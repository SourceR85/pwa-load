import type { PageLoad } from "./$types";
import { get } from "svelte/store";

/*
This will break with this message:
[vite] Error when evaluating SSR module /src/routes/+page.ts: failed to import "/src/lib/webStorage.ts"
|- ReferenceError: localStorage is not defined
*/
import { preferredScheme } from "$lib/webStorage";

export const load: PageLoad = async () => {
	// I prefer to avoid dynamic imports, but this is necessary:
	// const { preferredScheme } = await import("$lib/webStorage")

	return {
		preferredScheme: get(preferredScheme)
	}
}