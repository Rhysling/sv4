<script lang="ts">
	import { randomStore } from "../stores/random-store";
	import TextList from "../components/TextList.svelte";

	let rs = randomStore(123);
</script>

<h1>Demonstrate Stores</h1>

<div class="card">
	<TextList />
</div>

<div class="card">
	<div>Result = {$rs}</div>
	<div>
		<button type="button" on:click|preventDefault={rs.run}>Run Random</button>
	</div>
</div>

<style lang="scss">
</style>
