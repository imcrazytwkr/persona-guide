<script lang="ts" module>
	import type { GameId } from '$lib/types';

	export type GameMenuProps = {
		open: boolean;
		onClose: () => void;
		game: GameId;
	};
</script>

<script lang="ts">
	import { Navigation } from '@skeletonlabs/skeleton-svelte';

	import { resolve } from '$app/paths';

	import { dataIndex } from '$lib/data';
	import Close from '$lib/icons/close.svg?component';

	const games = Object.values(dataIndex).sort();

	let { open, onClose, game }: GameMenuProps = $props();
</script>

{#if open}
	<div class="fixed inset-0 z-40 bg-surface-950/60" aria-hidden="true" onclick={onClose}></div>
	<Navigation id="game-nav" layout="sidebar" class="fixed top-0 right-0 z-50 flex h-full flex-col">
		<Navigation.Header
			class="flex items-center justify-between gap-2 border-b border-surface-200-800 p-3"
		>
			<p class="text-lg font-bold">Games</p>
			<button
				type="button"
				class="btn-icon preset-tonal-surface"
				aria-label="Close menu"
				onclick={onClose}
			>
				<Close />
			</button>
		</Navigation.Header>
		<Navigation.Content class="flex-1 overflow-y-auto p-2">
			<Navigation.Menu>
				{#each games as g (g.id)}
					<Navigation.TriggerAnchor
						href={resolve(`/${g.id}`)}
						class="btn w-full justify-start {g.id === game
							? 'preset-filled-brand'
							: 'preset-tonal-surface'}"
						aria-current={g.id === game ? 'page' : undefined}
						onclick={onClose}
					>
						<Navigation.TriggerText class="text-left">{g.title}</Navigation.TriggerText>
					</Navigation.TriggerAnchor>
				{/each}
			</Navigation.Menu>
		</Navigation.Content>
	</Navigation>
{/if}
