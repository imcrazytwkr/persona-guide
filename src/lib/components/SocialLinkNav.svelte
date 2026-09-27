<script lang="ts" module>
	import type { GameId, SocialLink } from '$lib/types';

	export type SocialLinkNavProps = {
		game: GameId;
		links: SocialLink<string>[];
		arcana?: string;
	};

	type OpenMenu = 'links' | 'games' | 'none';
</script>

<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton-svelte';

	import GameMenu from '$lib/components/GameMenu.svelte';
	import SocialLinkMenu from '$lib/components/SocialLinkMenu.svelte';

	let { game, links, arcana }: SocialLinkNavProps = $props();

	let currentMenu = $state<OpenMenu>('none');
	function onClose() {
		currentMenu = 'none';
	}
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && onClose()} />

<AppBar class="sticky top-0 z-30 border-b border-surface-200-800 preset-filled-surface-100-900">
	<AppBar.Toolbar class="flex">
		<AppBar.Lead class="grow">
			<button
				type="button"
				class="btn-icon preset-tonal-surface btn-icon-lg"
				aria-label="Open social link menu"
				aria-expanded={currentMenu === 'links'}
				aria-controls="social-link-nav"
				onclick={() => (currentMenu = 'links')}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					aria-hidden="true"
				>
					<path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
				</svg>
			</button>
		</AppBar.Lead>
		<AppBar.Headline>
			<p class="text-lg font-bold">Social Link Guide</p>
		</AppBar.Headline>
		<AppBar.Trail class="grow justify-end">
			<button
				type="button"
				class="btn-icon preset-tonal-surface btn-icon-lg"
				aria-label="Open game menu"
				aria-expanded={currentMenu === 'games'}
				aria-controls="game-nav"
				onclick={() => (currentMenu = 'games')}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					aria-hidden="true"
				>
					<path d="M6.99 11 3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z" />
				</svg>
			</button>
		</AppBar.Trail>
	</AppBar.Toolbar>
</AppBar>

<SocialLinkMenu open={currentMenu === 'links'} {onClose} {game} {links} {arcana} />
<GameMenu open={currentMenu === 'games'} {onClose} {game} />
