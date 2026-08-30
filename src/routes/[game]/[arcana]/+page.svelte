<script lang="ts">
	import { page } from '$app/state';
	import Notes from '$lib/components/Notes.svelte';
	import RankCard from '$lib/components/RankCard.svelte';
	import { arcanaLabel, getLink } from '$lib/data/p5r';
	import { getRank } from '$lib/progress.svelte';
	import type { GameId } from '$lib/types';

	const game = $derived(page.params.game as GameId);
	const arcana = $derived(page.params.arcana ?? '');
	const link = $derived(getLink(game, arcana));
	const current = $derived(link ? getRank(link.game, link.arcana) : 0);
</script>

{#if link}
	<div class="mb-4">
		<p class="text-sm opacity-70">{arcanaLabel(link.arcana)} {link.romanNumeral}</p>
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
			<RankCard {game} {arcana} {rank} />
		{/each}
	</div>
{:else}
	<p>Unknown confidant.</p>
{/if}
