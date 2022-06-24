<script lang="ts">
	import i18n from '../i18n';
	import '../app.pcss';
	import _, { load } from '../i18n';
	load();
</script>

{#await load()}
	...
{:then}
	<slot />
{/await}
