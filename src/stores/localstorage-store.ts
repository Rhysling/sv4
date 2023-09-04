import { writable } from 'svelte/store';

export const localStore = <T extends JsonValue>(key: string, initial: T) => {

	const toString = (value: T) => JSON.stringify(value, null, 2);
	const toObj = JSON.parse;
	const isLs = !!localStorage;

	if (isLs && localStorage.getItem(key) === null) {
		localStorage.setItem(key, toString(initial));
	}

	const saved = <T>toObj((isLs && localStorage.getItem(key)) || toString(initial));

	const { subscribe, set } = writable<T>(saved);

	return {
		subscribe,
		set: (value: T) => {
			isLs && localStorage.setItem(key, toString(value));
			return set(value);
		},
		update: (cb: (a: T) => T) => {
			if (isLs) {
				let obj = cb(<T>toObj(localStorage.getItem(key) || toString(initial)));
				localStorage.setItem(key, toString(obj));
				return set(obj);
			}
		}
	}
} 