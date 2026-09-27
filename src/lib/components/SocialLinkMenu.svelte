<script lang="ts" module>
	import type { GameId, SocialLink } from '$lib/types';

	export type SocialLinkMenuProps = {
		open: boolean;
		onClose: () => void;
		game: GameId;
		links: SocialLink<string>[];
		arcana?: string;
	};
</script>

<script lang="ts">
	import { Navigation } from '@skeletonlabs/skeleton-svelte';

	import { resolve } from '$app/paths';

	import NavItem from '$lib/components/NavItem.svelte';
	import Close from '$lib/icons/close.svg?component';
	import { getRankState } from '$lib/state/rank';

	let { open, onClose, game, links, arcana }: SocialLinkMenuProps = $props();

	const ranks = getRankState();
</script>

{#if open}
	<div class="fixed inset-0 z-40 bg-surface-950/60" aria-hidden="true" onclick={onClose}></div>
	<Navigation id="social-link-nav" layout="sidebar" class="fixed z-50 flex h-full flex-col">
		<Navigation.Header
			class="flex items-center justify-between gap-2 border-b border-surface-200-800 p-3"
		>
			<p class="text-lg font-bold">Social Links</p>
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
				<NavItem
					href={resolve(`/${game}`)}
					label="All social links"
					active={!arcana}
					onclick={onClose}
				/>
				{#each links as link (link.arcana.value)}
					<NavItem
						href={resolve(`/${game}/${link.arcana.value}`)}
						label={link.arcana.label}
						rank={ranks.getRank(link.arcana.value)}
						active={arcana === link.arcana.value}
						onclick={onClose}
					/>
				{/each}
			</Navigation.Menu>
		</Navigation.Content>
	</Navigation>
{/if}
