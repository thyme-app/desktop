<script lang="ts">
	import { onMount } from 'svelte';

	import '../app.pcss';
	import i18n, { load } from '../i18n';

	let loaded: Promise<void>;
	onMount(() => {
		loaded = load();
	});
</script>

{#await loaded}
	...
{:then}
	<main class="m-4">
		<slot />
	</main>
{/await}
