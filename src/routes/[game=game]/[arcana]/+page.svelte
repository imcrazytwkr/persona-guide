<script lang="ts">
	import RanksView from './components/RanksView.svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
</script>

{#if data.link}
	<RanksView link={data.link} routes={data.routes} activeRoute={data.activeRoute} />
{:else}
	<p>Unknown social link.</p>
{/if}
