<script lang="ts">
	import { resolve } from '$app/paths';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
</script>

<main class="mx-auto w-full max-w-3xl flex-1 px-4 py-8">
	<h1 class="mb-4 text-2xl font-bold">Social Link Guide</h1>
	<ul class="grid grid-cols-1 gap-3 sm:grid-cols-2">
		{#each data.games as game (game.id)}
			<li>
				<a
					href={resolve(`/${game.id}`)}
					class="flex flex-col gap-1 card preset-filled-surface-100-900 p-4"
				>
					<h2 class="text-lg font-bold">{game.title}</h2>
				</a>
			</li>
		{/each}
	</ul>
</main>
