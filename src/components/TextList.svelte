<script lang="ts">
	import { textlist } from "../stores/textlist-store";

	let value = "";

	const add = () => {
		//debugger;
		if (value === "") return;

		textlist.update((v) => [...v, value]);
		value = "";
	};

	const remove = (i: number) => {
		//debugger;
		let tl = $textlist;
		tl.splice(i, 1);
		$textlist = tl;
	};
</script>

<section>
	<h2>Text List</h2>

	{#each $textlist as t, i}
		<p>
			{t} -- <a href="/" on:click|preventDefault={() => remove(i)}>Remove</a>
		</p>
	{/each}

	<p>
		<input type="text" bind:value />
	</p>
	<p>
		<button on:click={add}>Add</button> -
		<button on:click={textlist.clear}>Clear</button>
	</p>
</section>

<style lang="scss">
	section {
		border: 1px solid black;
		border-radius: 1em;
		padding: 1em;
	}

	h2 {
		font-family: "Arrus-BT-Bold", "Times New Roman", Times, serif;
		filter: drop-shadow(1px 1px 1px #333);
	}

	p {
		margin: 0.5em 0;
	}
</style>
