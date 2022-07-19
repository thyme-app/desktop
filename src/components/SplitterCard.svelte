<script lang="ts">
  export let name: string;
  export let description: string;
  export let version: string;
  export let clicked: Function;
  if (!name) throw new Error('name is required')
  if (!clicked) throw new Error('clicked is required')
  if (!description) description = '';
  if (!version) version = '';
</script>

<div class="bg-bg-light rounded-md p-4 m-4 hover:cursor-pointer" on:click={clicked()}>
  <h3 class="text-xl font-semibold">{name}</h3>
  <p class="mt-2">{description}</p>
  <p class="text-sm text-white-500">{version}</p>
</div>