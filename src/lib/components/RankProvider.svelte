<script lang="ts">
	import { RankState, setRankState } from '$lib/state/rank';
	import type { GameId } from '$lib/types';
	import type { Snippet } from 'svelte';

	let { game, children }: { game: GameId; children: Snippet } = $props();

	// Recreated by `{#key data.id}` in the game layout when the game param changes.
	// svelte-ignore state_referenced_locally
	setRankState(new RankState(game));
</script>

{@render children()}
