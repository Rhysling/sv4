<script lang="ts">
	import { flip } from "svelte/animate";
	import { quintOut } from "svelte/easing";

	let list = [0, 1, 2, 3, 4, 5, -1];

	let btnText = (n: number) => {
		if (n > -1) return `Remove ${n}`;
		return "Add";
	};

	const modifyList = (n: number) => {
		// Remove
		if (n > -1) {
			list = list.filter((a) => a != n);
			return;
		}

		// Add
		list = [...list.filter((a) => a > -1), Math.max(...list) + 1, -1];
	};
</script>

<h2>Demonstrate Animation</h2>

{#each list as n (n)}
	<div
		class="list"
		animate:flip={{ delay: 0, duration: 500, easing: quintOut }}
	>
		<div><button on:click={() => modifyList(n)}>{btnText(n)}</button></div>
	</div>
{/each}

<style lang="scss">
	h2 {
		margin: 1rem 0;
	}

	.list {
		margin: 0.5rem;
	}
</style>
