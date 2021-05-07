<script context="module">
	export const prerender = true
</script>

<script>
	import Entry from '$lib/Entry/index.svelte'
</script>

<svelte:head>
	<title>ilo toki ante</title>
</svelte:head>

<section>
	<Entry />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
