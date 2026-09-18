<script lang="ts" module>
	import type { DialogueChoice, DialogueOption, Rank, SocialLink } from '$lib/types';

	const optionHasRoutes = (option: DialogueOption) => Boolean(option.routeFlag);
	const choiceHasRoutes = (choice: DialogueChoice) =>
		Boolean(choice.route) || choice.options.some(optionHasRoutes);

	const rankHasRoutes = (rank: Rank) => rank.choices.some(choiceHasRoutes);
	const linkHasRoutes = (link: SocialLink) => link.ranks.some(rankHasRoutes);
</script>

<script lang="ts">
	import { routeSetter } from './store';
	import type { PageProps } from './$types';

	import Notes from '$lib/components/Notes.svelte';
	import { getRankState } from '$lib/state/rank';

	import RankCard from './components/RankCard.svelte';

	const { data }: PageProps = $props();
	const { link, activeRoute } = $derived(data);

	const ranks = getRankState();
	const currentRank = $derived(link ? ranks.getRank(link.arcana.value) : 0);

	const setRoute = $derived(routeSetter(link));
</script>

{#if link}
	<div class="mb-4">
		<p class="text-sm opacity-70">{link.arcana.label}</p>
		<h1 class="text-2xl font-bold">{link.name}</h1>
		<p class="mt-1">Current rank {currentRank}</p>
		<p class="mt-2 text-sm">Available at: {link.location}</p>
		<p class="text-sm opacity-80">{link.availability}</p>
		{#if linkHasRoutes(link)}
			<div
				class="mt-3 btn-group flex-row flex-wrap gap-2 preset-outlined-primary-500"
				role="radiogroup"
				aria-label="Route"
			>
				{#each data.routes as route (route.id)}
					<button
						type="button"
						role="radio"
						aria-checked={activeRoute === route.id}
						class="btn {activeRoute === route.id ? 'preset-filled-primary-500' : 'preset-tonal'}"
						onclick={() => setRoute(route.id)}
					>
						{route.label}
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
		{#each link.ranks as rank (rank.rank)}
			<RankCard arcana={link.arcana.value} {rank} {activeRoute} routes={data.routes} />
		{/each}
	</div>
{:else}
	<p>Unknown social link.</p>
{/if}
