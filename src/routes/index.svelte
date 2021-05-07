<script context="module">
	export const prerender = true
</script>

<script>
	import Input from '$lib/Input/index.svelte'
</script>

<svelte:head>
	<title>ilo pi sona nimi</title>
</svelte:head>

<section>
	<Input />
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
