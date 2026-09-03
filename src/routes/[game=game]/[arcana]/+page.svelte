<script lang="ts">
	import type { PageProps } from './$types';

	import { RankState, setRankStateContext } from '$lib/state/rank';
	import RankCard from '$lib/components/RankCard.svelte';
	import Notes from '$lib/components/Notes.svelte';

	const { data }: PageProps = $props();
	const link = $derived(data.link);

	const store = $derived(setRankStateContext(new RankState(data.game.id)));
	const current = $derived(link ? store.getRank(link.arcana.value) : 0);
</script>

{#if link}
	<div class="mb-4">
		<p class="text-sm opacity-70">{link.arcana.label}</p>
		<h1 class="text-2xl font-bold">{link.name}</h1>
		<p class="mt-1">Current rank {current}</p>
		<p class="mt-2 text-sm">Available at: {link.location}</p>
		<p class="text-sm opacity-80">{link.availability}</p>
		{#if current === 0}
			<div class="mt-2">
				<Notes text={link.unlock} />
			</div>
		{/if}
	</div>
	<div class="flex flex-col gap-4">
		{#each link.ranks as rank (rank.rank)}
			<RankCard game={data.game.id} arcana={link.arcana.value} {rank} />
		{/each}
	</div>
{:else}
	<p>Unknown confidant.</p>
{/if}
