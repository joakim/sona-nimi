<script context="module">
	let dictionary
	let query

	export async function load({ page, context }) {
		dictionary = context.dictionary
		query = page.query.get("q")
		
		return query ? true : { status: 302, redirect: '/' }
	}
</script>

<script>
	import Translation from '$lib/Translation/index.svelte'
</script>

<svelte:head>
	<title>ilo toki ante – {query}</title>
</svelte:head>

<section>
	<Translation {dictionary} {query} />
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
