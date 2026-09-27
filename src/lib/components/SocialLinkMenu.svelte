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
				onclick={onClose}>✕</button
			>
		</Navigation.Header>
		<Navigation.Content class="flex-1 overflow-y-auto p-2">
			<Navigation.Menu class="flex flex-col gap-1">
				<Navigation.TriggerAnchor
					href={resolve(`/${game}`)}
					class="btn min-h-11 w-full justify-start {arcana
						? 'preset-tonal-surface'
						: 'preset-filled-primary-500'}"
					aria-current={arcana ? undefined : 'page'}
					onclick={onClose}
				>
					<Navigation.TriggerText>All social links</Navigation.TriggerText>
				</Navigation.TriggerAnchor>
				{#each links as link (link.arcana.value)}
					<Navigation.TriggerAnchor
						href={resolve(`/${game}/${link.arcana.value}`)}
						class="btn min-h-11 w-full justify-between {arcana === link.arcana.value
							? 'preset-filled-primary-500'
							: 'preset-tonal-surface'}"
						aria-current={arcana === link.arcana.value ? 'page' : undefined}
						onclick={onClose}
					>
						<Navigation.TriggerText class="truncate text-left">
							{link.arcana.label}
						</Navigation.TriggerText>
						<span class="chip preset-filled-surface-200-800">
							{ranks.getRank(link.arcana.value)}
						</span>
					</Navigation.TriggerAnchor>
				{/each}
			</Navigation.Menu>
		</Navigation.Content>
	</Navigation>
{/if}
