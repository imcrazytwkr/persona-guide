<script lang="ts">
	import { resolve } from '$app/paths';
	import { getRankState } from '$lib/state/rank';
	import type { SocialLink } from '$lib/types';

	let { link }: { link: SocialLink } = $props();

	const ranks = getRankState();
	const current = $derived(ranks.getRank(link.arcana.value));
	const href = $derived(resolve(`/${link.game}/${link.arcana.value}`));
</script>

<a {href} class="flex flex-col gap-3 card preset-filled-surface-100-900 p-4">
	<div class="flex items-start justify-between gap-3">
		<div>
			<p class="text-sm opacity-70">{link.arcana.label}</p>
			<h2 class="text-lg font-bold">{link.name}</h2>
		</div>
		{#if current < 10}
			<span class="chip preset-filled-primary-500">Rank {current}</span>
		{:else}
			<span class="chip preset-filled-success-500">Max</span>
		{/if}
	</div>
</a>
