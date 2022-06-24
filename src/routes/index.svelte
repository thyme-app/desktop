<script lang="ts">
	import _, { load } from '../i18n';
	import IconPlug from '~icons/tabler/plug-connected'
</script>

<div class="mt-4 mb-8">
	<div class="flex items-center">
		<IconPlug class="h-6 w-6 me-4" />
		<h1>{_.t('splitter')}</h1>
	</div>
	<h2 class="ms-11">{_.t('splitter.description')}</h2>
</div>
