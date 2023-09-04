import { localStore } from './localstorage-store';
// import { derived } from 'svelte/store';


const list = localStore<string[]>("textlist", []);

export const textlist = {
  ...list,
  clear: () => list.set([])
};

// export const isLoggedIn = derived(
//   user,
//   $user => !!$user.email
// );