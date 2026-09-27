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
	import Menu from '$lib/icons/menu.svg?component';
	import Swap from '$lib/icons/swap.svg?component';

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
				<Menu />
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
				<Swap />
			</button>
		</AppBar.Trail>
	</AppBar.Toolbar>
</AppBar>

<SocialLinkMenu open={currentMenu === 'links'} {onClose} {game} {links} {arcana} />
<GameMenu open={currentMenu === 'games'} {onClose} {game} />
