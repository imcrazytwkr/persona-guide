<script lang="ts">
	import ConfidantNav from '$lib/components/ConfidantNav.svelte';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Confidant Guide</title>
</svelte:head>

<div class="flex min-h-dvh flex-col bg-surface-50-950 text-surface-950-50">
	<ConfidantNav />
	<main class="mx-auto w-full max-w-3xl flex-1 px-4 py-4">
		{@render children()}
	</main>
</div>
