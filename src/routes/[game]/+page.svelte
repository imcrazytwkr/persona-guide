<script lang="ts">
	import { page } from '$app/state';
	import ConfidantCard from '$lib/components/ConfidantCard.svelte';
	import { getLinks } from '$lib/data/p5r';
	import { getGame } from '$lib/games';
	import type { GameId } from '$lib/types';

	const game = $derived(page.params.game as GameId);
	const meta = $derived(getGame(game));
	const links = $derived(getLinks(game));
</script>

{#if meta}
	<h1 class="mb-4 text-2xl font-bold">{meta.title}</h1>
	<ul class="grid grid-cols-1 gap-3 sm:grid-cols-2">
		{#each links as link (link.arcana)}
			<li><ConfidantCard {link} /></li>
		{/each}
	</ul>
{:else}
	<p>Unknown game</p>
{/if}
