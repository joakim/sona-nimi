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
	import { goto } from '$app/navigation'
	import Translation from '$lib/Translation/index.svelte'
	
	function edit() {
		goto('/?q=' + encodeURIComponent(query))
	}
</script>

<svelte:head>
	<title>ilo pi sona nimi – {query}</title>
</svelte:head>

<section>
	<div class="output">
		<Translation {dictionary} {query} />
	</div>
	<button class="edit" on:click={edit}>o ante</button>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
	
	.output {
		flex-grow: 1;
		align-items: center;
		display: flex;
	}
</style>
