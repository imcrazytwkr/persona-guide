<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Social Link Guide</title>
</svelte:head>

<div class="flex min-h-dvh flex-col bg-surface-50-950 text-surface-950-50">
	{@render children()}
</div>
