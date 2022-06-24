<script lang="ts">
	import '../app.pcss';
	import i18n, { load } from '../i18n';
	load();
</script>

{#await load()}
	...
{:then}
	<slot />
{/await}
