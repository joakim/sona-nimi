<script context="module">
	export const prerender = true
	let query

	export async function load({ page }) {
		query = page.query.get("q") || ''
		return true
	}
</script>

<script>
	import Input from '$lib/Input/index.svelte'
</script>

<svelte:head>
	<title>ilo pi sona nimi</title>
</svelte:head>

<section>
	<Input {query} />
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
