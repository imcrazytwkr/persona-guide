<script lang="ts" module>
	import type { SocialLink, SocialLinkRank } from '$lib/types';

	export type RanksViewProps = {
		link: SocialLink<string>;
		routes: Record<string, string>;
		activeRoute: string;
	};

	function rankKey(rank: SocialLinkRank<string>) {
		if (!rank.route) {
			return rank.rank;
		}

		return `${rank.rank}-${rank.route}`;
	}

	function filterRanks(route: string, ranks: SocialLinkRank<string>[]) {
		if (!route) {
			return ranks;
		}

		const predicate = (rank: SocialLinkRank<string>) => !rank.route || rank.route === route;
		return ranks.filter(predicate);
	}
</script>

<script lang="ts">
	import Notes from '$lib/components/Notes.svelte';
	import { getRankState } from '$lib/state/rank';

	import { routeSetter } from '../store';
	import RankCard from './RankCard.svelte';

	const { link, routes, activeRoute }: RanksViewProps = $props();

	const rankState = getRankState();

	const multiRoute = $derived(link.routes.length > 1);
	const setRoute = $derived(routeSetter(link));

	const ranks = $derived(multiRoute ? filterRanks(activeRoute, link.ranks) : link.ranks);
	const currentRank = $derived(link ? rankState.getRank(link.arcana.value) : 0);
</script>

<div class="mb-4">
	<p class="text-sm opacity-70">{link.arcana.label}</p>
	<h1 class="text-2xl font-bold">{link.name}</h1>
	<p class="mt-1">Current rank {currentRank}</p>
	<p class="mt-2 text-sm">Available at: {link.location}</p>
	<p class="text-sm opacity-80">{link.availability}</p>
	{#if multiRoute}
		<div
			class="mt-3 btn-group flex-row flex-wrap gap-2 preset-outlined-primary-500"
			role="radiogroup"
			aria-label="Route"
		>
			{#each link.routes as id}
				<button
					type="button"
					role="radio"
					aria-checked={activeRoute === id}
					class="btn {activeRoute === id ? 'preset-filled-primary-500' : 'preset-tonal'}"
					onclick={() => setRoute(id)}
				>
					{routes[id]}
				</button>
			{/each}
		</div>
	{/if}
	{#if currentRank === 0}
		<div class="mt-2">
			<Notes text={link.unlock} />
		</div>
	{/if}
</div>
<div class="flex flex-col gap-4">
	{#each ranks as rank (rankKey(rank))}
		<RankCard arcana={link.arcana.value} {rank} {activeRoute} {routes} />
	{/each}
</div>
