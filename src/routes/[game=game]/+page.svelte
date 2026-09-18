<script lang="ts">
	import SocialLinkCard from '$lib/components/SocialLinkCard.svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
</script>

{#key data.id}
	<h1 class="mb-4 text-2xl font-bold">{data.title}</h1>
	{#if data.socialLinks.length > 0}
		<ul class="grid grid-cols-1 gap-3 sm:grid-cols-2">
			{#each data.socialLinks as link (link.arcana)}
				<li><SocialLinkCard {link} /></li>
			{/each}
		</ul>
	{/if}
{/key}
