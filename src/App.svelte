<script lang="ts">
	import { onMount } from "svelte";

	import Nav from "./components/Nav.svelte";

	import Home from "./pages/Home.svelte";
	import StoreDemo from "./pages/StoreDemo.svelte";
	import AxiosDemo from "./pages/AxiosDemo.svelte";

	import { currentRoute, navFromUrl } from "./stores/route-store.js";

	let path = "/";
	let page = "Home";

	onMount(() => {
		navFromUrl();
	});

	let pages: any = {
		Home,
		StoreDemo,
		AxiosDemo,
	};

	$: {
		path = $currentRoute.path;
		page = $currentRoute?.page ?? "Home";

		window.scroll({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}
</script>

<main>
	<Nav />
	<svelte:component this={pages[page]} />
</main>

<style lang="scss">
	@import "./styles/_custom-variables.scss";

	main {
		background-color: #fff;
		max-width: 800px;
		margin: 1rem auto;
		padding: 1em;
	}

	@media only screen and (max-width: $bp-small) {
	}
</style>
