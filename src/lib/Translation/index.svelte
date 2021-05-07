<script>
	import Word from '$lib/Word/index.svelte'

	export let dictionary
	export let query

	// Matches words, newlines and anything that's not a word or a newline
	const re = /\w+|\n|[^\w\n]+/ig

	// Differentiate between toki pona words, newlines and other (ante) parts
	const parts = query.trim().match(re).map(part => {
		const lowercased = part.toLowerCase()
		if (dictionary.has(lowercased)) {
			return {
				verbatim: part,
				...dictionary.get(lowercased)
			}
		}
		else if (part === "\n") {
			return { newline: true }
		}
		else {
			return { ante: part }
		}
	})

	// Easter egg!
	// @todo Make it a feature, highlight ante words when ctr/cmd key is pressed
	function lookup(word, event) {
		if (event.ctrlKey || event.metaKey) {
			window.open('https://glosbe.com/mis_tok/en/' + word)
		}
	}
</script>

<div class="translation">
	{#each parts as part}
		{#if part.verbatim}
			<Word word={part} />
		{:else if part.newline}
			<br>
		{:else}
			<span class="part ante" on:click={event => lookup(part.ante, event)}>{part.ante}</span>
		{/if}
	{/each}
</div>

<style>
	:global(.part) {
		display: inline-block;
		font-size: 2em;
	}

	.ante {
		white-space: pre;
	}
</style>
