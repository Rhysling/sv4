import { writable } from 'svelte/store';

// Good way to do read only.

export const randomStore = (initial: number) => {

	const { subscribe, set, update } = writable<number>(initial);

	return {
		subscribe,
		run: () => set(Math.floor(Math.random() * 100)),
		add: (n: number) => update((v) => v + n)
	}
} 