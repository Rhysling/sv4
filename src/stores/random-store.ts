import { writable } from 'svelte/store';

// Good way to do read only.

export const randomStore = (initial: number) => {

	const { subscribe, set } = writable<number>(initial);

	return {
		subscribe,
		run: () => set(Math.floor(Math.random() * 100))
	}
} 