<script lang="ts">
	import Notes from '$lib/components/Notes.svelte';
	import { getRankState } from '$lib/state/rank';
	import type { DialogueChoice, GameRoute, Rank, RouteId } from '$lib/types';

	let {
		arcana,
		rank,
		activeRoute,
		routes
	}: {
		arcana: string;
		rank: Rank;
		activeRoute: RouteId;
		routes: GameRoute[];
	} = $props();

	const ranks = getRankState();
	const current = $derived(ranks.getRank(arcana));
	const checked = $derived(current >= rank.rank);
	const visibleChoices = $derived(
		rank.choices.filter((choice) => choiceVisible(choice, activeRoute))
	);

	function choiceVisible(choice: DialogueChoice, route: RouteId): boolean {
		return !choice.route || choice.route === route;
	}

	function routeLabel(id: RouteId): string {
		return routes.find((route) => route.id === id)?.label ?? id;
	}
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
			onchange={() => ranks.toggleRank(arcana, rank.rank)}
		/>
		<span class="text-lg font-bold">Rank {rank.rank}</span>
		{#if checked}
			<span class="chip preset-filled-surface-300-700">Cleared</span>
		{/if}
	</label>

	{#if !checked}
		<Notes text={rank.requirements} />

		{#if visibleChoices.length}
			<div class="flex flex-col gap-4">
				{#each visibleChoices as choice}
					<div>
						<p class="mb-2 italic">{choice.prompt}</p>
						<ul class="flex flex-col gap-1">
							{#each choice.options as option}
								<li class="flex justify-between gap-3">
									<span class="flex flex-wrap items-center gap-2">
										{option.text}
										{#if option.routeFlag}
											<span class="chip preset-tonal-secondary">
												{routeLabel(option.routeFlag)}
											</span>
										{/if}
									</span>
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
