<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/dictionary.json')

		if (res.ok) {
			const data = await res.json()

			// Turn JSON object into a map of words
			const dictionary = data.reduce((map, entry) => {
				map.set(entry.name, entry)

				// Add synonyms as own entries
				if (entry.synonyms) {
					entry.synonyms.forEach(synonym => map.set(synonym, entry))
				}

				return map
			}, new Map())

			// Pass dictionary on to page components through context
			return { context: { dictionary } }
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		}
	}

	// @todo class:meta is not working, maybe a sveltekit bug?
	// @see lib/Translation/index.svelte
	let meta = false
	function handleKeyDown(event) {
		if (!meta && event.ctrlKey || event.metaKey) {
			meta = true
		}
	}
	function handleKeyUp(event) {
		if (meta && !(event.ctrlKey || event.metaKey)) {
			meta = false
		}
	}
</script>

<script>
	import '../app.css'
</script>

<svelte:window on:keydown={handleKeyDown} on:keyup={handleKeyUp}/>

<main class:meta>
	<slot />
</main>

<footer>
	<p><a href="/">ilo toki ante</a> tan <a href="https://github.com/joakim">jan Luke</a></p>
	<div class="links">
		<a href="https://github.com/joakim/toki-ante" title="o kama jo e toki ilo!"><svg class="github" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20"><path fill="rgb(149, 157, 165)" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg></a>
	</div>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 5rem 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 2em;
	}

	footer p {
		line-height: 1em;
	}

	footer a:link,
	footer a:visited {
		color: var(--heading-colour);
		text-decoration: underline;
	}

	footer a:hover,
	footer a:focus,
	footer a:active {
		color: var(--accent-color);
	}

	footer .links {
		position: absolute;
		right: 2em;
		bottom: 2em;
	}

	footer .links:hover .github path {
		fill: var(--accent-color);
	}

	@media (min-width: 480px) {
		footer {
			padding: 2em 0;
		}
	}
</style>
