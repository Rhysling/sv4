<script lang="ts">
	import { myRandomStore as rs } from "../stores/my-random-store";
	import TextList from "../components/TextList.svelte";
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
