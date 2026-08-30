<script lang="ts">
	import Notes from '$lib/components/Notes.svelte';
	import { getRank, toggleRank } from '$lib/progress.svelte';
	import type { GameId, Rank } from '$lib/types';

	let { game, arcana, rank }: { game: GameId; arcana: string; rank: Rank } = $props();

	const current = $derived(getRank(game, arcana));
	const checked = $derived(current >= rank.rank);
</script>

<article
	id={`rank-${rank.rank}`}
	class="flex flex-col gap-4 card preset-filled-surface-100-900 p-4"
>
	<label class="flex min-h-11 items-center gap-3">
		<input
			class="checkbox size-6"
			type="checkbox"
			{checked}
			onchange={() => toggleRank(game, arcana, rank.rank)}
		/>
		<span class="text-lg font-bold">Rank {rank.rank}</span>
		{#if checked}
			<span class="chip preset-filled-surface-300-700">Cleared</span>
		{/if}
	</label>

	{#if !checked}
		<Notes text={rank.requirements} />

		{#if rank.choices.length}
			<div class="flex flex-col gap-4">
				{#each rank.choices as choice}
					<div>
						<p class="mb-2 italic">{choice.prompt}</p>
						<ul class="flex flex-col gap-1">
							{#each choice.options as option}
								<li class="flex justify-between gap-3">
									<span>{option.text}</span>
									<span class="chip preset-filled-primary-500">+{option.points}</span>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		{/if}

		{#if rank.unlocks.length}
			<ul class="flex flex-wrap gap-2">
				{#each rank.unlocks as unlock}
					<li class="chip preset-tonal-secondary">{unlock}</li>
				{/each}
			</ul>
		{/if}
	{/if}
</article>
