<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<script>
import { listen } from '@tauri-apps/api/event';
const unlisten = listen('root', (event) => {
  console.log(`payload: ${event.payload}`);
});
</script>