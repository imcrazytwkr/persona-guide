<script lang="ts" module>
	export type NavItemProps = {
		href: string;
		label: string;
		active?: boolean;
		rank?: number;
		onclick?: () => void;
	};
</script>

<script lang="ts">
	let { href, label, active = false, rank, onclick }: NavItemProps = $props();
</script>

<a
	{href}
	class="flex w-full items-center justify-between gap-2 rounded-base px-2 py-1 text-base no-underline hover:brightness-125 dark:hover:brightness-75 {active
		? 'preset-filled-brand'
		: 'preset-tonal-surface'}"
	aria-current={active ? 'page' : undefined}
	{onclick}
>
	<span>{label}</span>
	{#if typeof rank === 'number'}
		<!--
			The numbers can look skewed to left or right depending on scale and
			font rendering. Nothing much I can do about it tbh.
		-->
		<span class="chip shrink-0 preset-filled-surface-200-800">{rank}</span>
	{/if}
</a>
