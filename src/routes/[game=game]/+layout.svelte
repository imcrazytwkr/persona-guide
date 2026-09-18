<script lang="ts">
	import RankProvider from '$lib/components/RankProvider.svelte';
	import SocialLinkNav from '$lib/components/SocialLinkNav.svelte';
	import type { LayoutProps } from './$types';

	const { data, params, children }: LayoutProps = $props();
</script>

{#key data.id}
	<RankProvider game={data.id}>
		<SocialLinkNav game={data.id} links={data.socialLinks} arcana={params.arcana} />
		<main class="mx-auto w-full max-w-3xl flex-1 px-4 py-4">
			{@render children()}
		</main>
	</RankProvider>
{/key}
