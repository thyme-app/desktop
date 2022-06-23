<script lang="ts">
	import { onMount } from 'svelte';
	import { isLoading } from 'svelte-i18n';
	import '../app.pcss';
	import i18n from '../i18n';

	i18n();
</script>

{#if $isLoading}
	...
{:else}
	<slot />
{/if}
