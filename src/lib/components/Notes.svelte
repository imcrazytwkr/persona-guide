<script lang="ts">
	let { text }: { text: string } = $props();
</script>

{#if text}
	<p class="text-sm whitespace-pre-wrap">{text}</p>
{/if}
