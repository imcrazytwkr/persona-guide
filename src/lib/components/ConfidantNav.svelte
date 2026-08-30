<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { arcanaLabel, getLinks } from '$lib/data/p5r';
	import { isGameId } from '$lib/games';
	import { getRank } from '$lib/progress.svelte';
	import type { GameId } from '$lib/types';
	import { AppBar, Navigation } from '@skeletonlabs/skeleton-svelte';

	let open = $state(false);

	const game = $derived.by((): GameId => {
		const id = page.params.game;
		return id && isGameId(id) ? id : 'p5r';
	});
	const links = $derived(getLinks(game));
	const arcana = $derived(page.params.arcana);

	function close() {
		open = false;
	}
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && close()} />

<AppBar class="sticky top-0 z-30 border-b border-surface-200-800 preset-filled-surface-100-900">
	<AppBar.Toolbar class="flex">
		<AppBar.Lead class="grow">
			<button
				type="button"
				class="btn-icon preset-tonal-surface btn-icon-lg"
				aria-label="Open confidant menu"
				aria-expanded={open}
				aria-controls="confidant-nav"
				onclick={() => (open = true)}
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
			<p class="text-lg font-bold">Confidant Guide</p>
		</AppBar.Headline>
		<AppBar.Trail class="grow"></AppBar.Trail>
	</AppBar.Toolbar>
</AppBar>

{#if open}
	<button
		type="button"
		class="fixed inset-0 z-40 bg-surface-950/60"
		aria-label="Close menu"
		onclick={close}
	></button>
	<Navigation id="confidant-nav" layout="sidebar" class="fixed z-50 flex h-full flex-col">
		<Navigation.Header
			class="flex items-center justify-between gap-2 border-b border-surface-200-800 p-3"
		>
			<p class="text-lg font-bold">Confidants</p>
			<button
				type="button"
				class="btn-icon preset-tonal-surface"
				aria-label="Close menu"
				onclick={close}>✕</button
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
					onclick={close}
				>
					<Navigation.TriggerText>All confidants</Navigation.TriggerText>
				</Navigation.TriggerAnchor>
				{#each links as link (link.arcana)}
					<Navigation.TriggerAnchor
						href={resolve(`/${game}/${link.arcana}`)}
						class="btn min-h-11 w-full justify-between {arcana === link.arcana
							? 'preset-filled-primary-500'
							: 'preset-tonal-surface'}"
						aria-current={arcana === link.arcana ? 'page' : undefined}
						onclick={close}
					>
						<Navigation.TriggerText class="truncate text-left">
							{arcanaLabel(link.arcana)}
						</Navigation.TriggerText>
						<span class="chip preset-filled-surface-200-800">
							{getRank(game, link.arcana)}
						</span>
					</Navigation.TriggerAnchor>
				{/each}
			</Navigation.Menu>
		</Navigation.Content>
	</Navigation>
{/if}
