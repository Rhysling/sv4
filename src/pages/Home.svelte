<script lang="ts">
	import svelteLogo from "/assets/img/svelte.svg";
	import viteLogo from "/assets/img/vite.svg";

	import Counter from "../components/Counter.svelte";
</script>

<div class="card">
	<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
		<img src={viteLogo} class="logo" alt="Vite Logo" />
	</a>
	<a href="https://svelte.dev" target="_blank" rel="noreferrer">
		<img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
	</a>
	<h1>Vite + Svelte</h1>
</div>

<div class="card">
	<Counter />
</div>

<p>
	Check out <a
		href="https://github.com/sveltejs/kit#readme"
		target="_blank"
		rel="noreferrer">SvelteKit</a
	>, the official Svelte app framework powered by Vite!
</p>

<p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>

<style lang="scss">
	.logo {
		height: 6em;
		padding: 1.5em;
		will-change: filter;
		transition: filter 300ms;

		&:hover {
			filter: drop-shadow(0 0 2em #646cffaa);
		}

		&.svelte:hover {
			filter: drop-shadow(0 0 2em #ff3e00aa);
		}
	}

	.read-the-docs {
		color: #888;
	}
</style>
