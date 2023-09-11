<script lang="ts">
	import { type AxiosError, type AxiosResponse } from "axios";
	import axios from "axios";
	import { weatherApiKey } from "../secrets/keys";
	import { myRandomStore as rs } from "../stores/my-random-store";

	let place = "";
	let message = "";
	let res: WxRealtime | undefined;

	let loadWeather = () => {
		place = place || "";
		place = place.trim();
		if (place == "") {
			message = "Place is missing.";
			return;
		}

		message = "";
		const url = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${place}`;

		axios
			.get(url)
			.then((response: AxiosResponse<WxRealtime>) => {
				res = response.data;
				message = JSON.stringify(res, null, "\t");
			})
			.catch((e: AxiosError) => {
				console.error(e);
				message = JSON.stringify(e, null, "\t");
			});
	};
</script>

<h1>Demonstrate Random Store</h1>
<div class="random">
	<div>Result = {$rs}</div>
	<div>
		<button type="button" on:click|preventDefault={() => rs.add(3)}
			>Add 3</button
		>
	</div>
</div>

<h1>Demonstrate Axios</h1>

<div>
	Where: <input type="text" bind:value={place} />
	<button type="button" on:click|preventDefault={loadWeather}>Go</button>
</div>

<div>Results</div>
<pre>
	{message}
</pre>

<style lang="scss">
	@import "../styles/_custom-variables.scss";

	h1 {
		margin: 2rem 0;
	}

	.random {
		border-width: 1px 0;
		border-style: solid;
		border-color: black;
		background-color: pink;
		padding: 2rem;
	}

	@media only screen and (max-width: $bp-small) {
	}
</style>
