<script>
	import { goto } from '$app/navigation'

	export let query = ''
	let placeholder = 'toki!  This tool is for looking up the meaning of words in a Toki Pona text.  Click here to enter or paste some Toki Pona, then press oko.  You can then move the mouse cursor over the words to see their meanings.'

	function translate() {
		goto('/t/?q=' + encodeURIComponent(query))
	}
</script>

<textarea class="input" bind:value={query} placeholder={placeholder.replace(/  /g, "\n\n")}></textarea>

<button class="btn" on:click={translate} disabled={query.length === 0}>o lukin</button>

<style>
.input {
	width: 30vw;
	height: 30vh;
	padding: 1em;
	font-size: 1em;
	border: 1px solid var(--primary-color);
	border-radius: 4px;
}

.input:focus::placeholder {
	color: transparent;
}
</style>
